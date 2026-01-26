import { motion } from "framer-motion";

interface Sponsor {
  name: string;
  logo: string;
  tier: "title" | "gold" | "silver" | "bronze";
}

interface SponsorGridProps {
  sponsors: Sponsor[];
}

const tierConfig = {
  title: {
    size: "w-48 h-24 md:w-64 md:h-32",
    cols: "grid-cols-1 md:grid-cols-2",
  },
  gold: {
    size: "w-36 h-20 md:w-48 md:h-24",
    cols: "grid-cols-2 md:grid-cols-3",
  },
  silver: {
    size: "w-28 h-16 md:w-36 md:h-20",
    cols: "grid-cols-2 md:grid-cols-4",
  },
  bronze: {
    size: "w-24 h-14 md:w-28 md:h-16",
    cols: "grid-cols-3 md:grid-cols-5",
  },
};

const tierLabels = {
  title: "Title Sponsors",
  gold: "Gold Sponsors",
  silver: "Silver Sponsors",
  bronze: "Bronze Sponsors",
};

const SponsorGrid = ({ sponsors }: SponsorGridProps) => {
  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) acc[sponsor.tier] = [];
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<string, Sponsor[]>);

  const tierOrder: ("title" | "gold" | "silver" | "bronze")[] = [
    "title",
    "gold",
    "silver",
    "bronze",
  ];

  return (
    <div className="space-y-12">
      {tierOrder.map(
        (tier) =>
          groupedSponsors[tier] && (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-heading font-semibold text-center mb-6 text-muted-foreground uppercase tracking-wider">
                {tierLabels[tier]}
              </h3>
              <div
                className={`grid ${tierConfig[tier].cols} gap-6 justify-items-center`}
              >
                {groupedSponsors[tier].map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`${tierConfig[tier].size} glass-card-hover flex items-center justify-center p-4 group`}
                  >
                    {sponsor.logo ? (
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="text-muted-foreground font-heading font-medium text-center text-sm group-hover:text-primary transition-colors">
                        {sponsor.name}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
      )}
    </div>
  );
};

export default SponsorGrid;

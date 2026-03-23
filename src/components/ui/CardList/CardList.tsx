import styles from './CardList.module.scss';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card/Card';

interface CardListProps {
  title: string;
  cards: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export const CardList = ({ title, cards }: CardListProps) => {
  return (
    <section className={styles.cardList}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <Card key={index} className={styles.card}>
            <CardHeader>
              <div className={styles.icon}>{card.icon}</div>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}; 
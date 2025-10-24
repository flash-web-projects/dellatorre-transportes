import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image?: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, image, link }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift border-2 border-border hover:border-accent transition-all duration-300 group h-full flex flex-col">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3 text-primary-foreground">
              <div className="p-2 bg-accent rounded-lg">
                <Icon size={24} />
              </div>
              <h3 className="font-montserrat font-bold text-xl">{title}</h3>
            </div>
          </div>
        </div>
      )}

      <CardContent className="p-6">
        {!image && (
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Icon size={28} className="text-accent" />
            </div>
            <h3 className="font-montserrat font-bold text-xl">{title}</h3>
          </div>
        )}

        <p className="text-muted-foreground mb-4 font-poppins">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
              <span className="font-poppins">{feature}</span>
            </li>
          ))}
        </ul>

        {link && (
          <Button variant="outline" asChild className="w-full group/btn border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link to={link}>
              Saiba Mais
              <span className="ml-2 group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

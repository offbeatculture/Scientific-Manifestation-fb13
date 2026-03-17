import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "../AnimatedSection";

const faqs = [
  { q: "Will I get recording?", a: "No. It is a limited time broadcast only. The recordings are not shared." },
  { q: "Is it in Hindi or English??", a: "This workshop will be conducted in English only." },
  { q: "What is the duration?", a: "It is a 90 minutes program. The timing is mentioned at the top of this page." },
  { q: "Why is FREE? Is it really going to be FREE?", a: "We want to reach as many people as possible, and give them an opportunity to transform their life. But the real cost of this masterclass is Rs. 499. It’s NOT going to be FREE in the near future. So, register before the price goes up." },
  { q: "What are the next steps after registering for the Masterclass?", a: "You have to join the WhatsApp group for the Masterclass. All the announcements will be communicated to the group. We will also be sharing a link to the Masterclass over the registered email ID." },
  { q: "Is it live?", a: "This Masterclass was originally recorded during a live session and is now available as a limited-time broadcast.- You’ll experience the full energy of the original session — just like those who attended it live." },
];

const FAQGa = () => (
  <section className="py-14 lg:py-20 section-surface">
    <div className="container mx-auto px-4 max-w-3xl">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Everything you need to know before registering.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Accordion type="single" collapsible className="space-y-2.5">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="card-elevated px-5 border-none">
              <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline py-4 text-sm">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4 text-sm">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQGa;

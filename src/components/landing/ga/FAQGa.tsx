import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "../AnimatedSection";

const faqs = [
  { q: "Will I get recording?", a: "This is a LIVE-only session and recordings will not be shared. Be there live to get the full experience and interact directly with Ankit." },
  { q: "Is this for beginners?", a: "Absolutely. Whether you're just starting or have tried manifestation before, this session is designed to work for all levels with a scientific approach." },
  { q: "What is the duration?", a: "The masterclass is exactly 90 minutes — packed with actionable strategies, live exercises, and a complete blueprint you can use immediately." },
  { q: "Why is FREE? Is it really going to be FREE?", a: "Yes, 100% free. Ankit believes everyone deserves access to this knowledge. This is a limited-time offer to help as many people as possible." },
  { q: "What are the most important things for the Masterclass?", a: "Come with an open mind, a notebook, and a quiet space. That's all you need to make the most of this transformative session." },
  { q: "Is it live?", a: "Yes! This is a fully live and interactive Zoom session. You'll be able to ask questions and participate in real-time exercises." },
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

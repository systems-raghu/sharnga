import { Check } from "lucide-react";
import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function Pricing() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section className="py-24 bg-slate-50 border border-slate-100 m-2 sm:m-4 rounded-[2rem] sm:rounded-[3rem] overflow-hidden" id="discovery-call">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6">
              <LetterReveal>A Fraction of the Cost of an Unreliable VA.</LetterReveal>
            </h2>
            <BlurReveal delay={0.1}>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We offer comprehensive monthly packages ranging from <strong>$650 to $1,200+</strong> depending on your DM volume and custom requirements. 
              </p>
            </BlurReveal>
            
            <BlurReveal delay={0.2}>
              <ul className="space-y-4 mb-10">
                {[
                  "Custom AI training on your voice and offers",
                  "Advanced lead qualification & triage",
                  "Seamless calendar integration",
                  "24/7/365 uptime with zero sick days",
                  "Ongoing optimization and reporting"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-[#1C3418]/10 text-[#1C3418] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </BlurReveal>
          </div>

          <BlurReveal delay={0.3}>
            <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Discovery Call</h3>
              <p className="text-slate-600 mb-8">Let's diagnose your current DM bottleneck and map out the exact system you need to scale.</p>
              
              <div className="w-full h-[550px] overflow-hidden rounded-xl border border-slate-100">
                <Cal 
                  namespace="15min"
                  calLink="sharnga-ai/15min"
                  style={{width:"100%",height:"100%",overflow:"scroll"}}
                  config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
                />
              </div>
            </div>
          </BlurReveal>

        </div>
      </div>
    </section>
  );
}

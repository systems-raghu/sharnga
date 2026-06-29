import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface Message {
  from: "lead" | "agent";
  text: string;
}

interface IGPhoneProps {
  messages: Message[];
  typing?: boolean;
  headerName?: string;
  headerSub?: string;
  scale?: number;
  theme?: "dark" | "light";
}

export function IGPhone({
  messages,
  typing = false,
  headerName = "ava.rivers",
  headerSub = "Active now",
  scale = 1,
  theme = "dark",
}: IGPhoneProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative flex-shrink-0 transition-shadow duration-300",
        isDark
          ? "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08),inset_0_0_0_2px_#1a1a1a]"
          : "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.08),inset_0_0_0_2px_#1a1a1a]"
      )}
      style={{
        width: 320 * scale,
        height: 640 * scale,
        borderRadius: 44 * scale,
        background: isDark ? "#0a0a0a" : "#f5f5f5",
        padding: 10 * scale,
      }}
    >
      {/* Notch */}
      <div
        className={cn("absolute top-3.5 left-1/2 -translate-x-1/2 z-10", isDark ? "bg-black" : "bg-[#222]")}
        style={{
          width: 100 * scale,
          height: 28 * scale,
          borderRadius: 20 * scale,
        }}
      />

      {/* Screen */}
      <div
        className={cn("w-full h-full overflow-hidden flex flex-col font-sans", isDark ? "bg-black text-white" : "bg-white text-black")}
        style={{
          borderRadius: 36 * scale,
        }}
      >
        {/* Status Bar */}
        <div
          className="flex justify-between items-end px-5 pb-1 font-semibold"
          style={{
            height: 44 * scale,
            paddingLeft: 22 * scale,
            paddingRight: 22 * scale,
            paddingBottom: 4 * scale,
            fontSize: 13 * scale,
          }}
        >
          <span>9:41</span>
          <div className="flex gap-1 items-center" style={{ gap: 4 * scale, fontSize: 11 * scale }}>
            <span>•••</span>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* DM Header */}
        <div
          className={cn("flex items-center border-b", isDark ? "border-white/10" : "border-[#efefef]")}
          style={{
            gap: 10 * scale,
            padding: `${8 * scale}px ${14 * scale}px`,
          }}
        >
          <div style={{ fontSize: 18 * scale }}>‹</div>
          <div
            className="rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
            style={{
              width: 32 * scale,
              height: 32 * scale,
              padding: 2 * scale,
            }}
          >
            <div
              className={cn("w-full h-full rounded-full flex items-center justify-center font-bold", isDark ? "bg-black" : "bg-white")}
              style={{ fontSize: 14 * scale }}
            >
              {headerName[0].toUpperCase()}
            </div>
          </div>
          <div className="flex-1" style={{ lineHeight: 1.2 }}>
            <div className="font-semibold" style={{ fontSize: 14 * scale }}>{headerName}</div>
            <div className={isDark ? "text-white/50" : "text-[#8e8e8e]"} style={{ fontSize: 11 * scale }}>{headerSub}</div>
          </div>
          <div style={{ fontSize: 16 * scale }}>📞</div>
          <div className="ml-2" style={{ fontSize: 16 * scale, marginLeft: 8 * scale }}>📹</div>
        </div>

        {/* Messages */}
        <div
          className={cn("flex-1 flex flex-col overflow-y-auto overflow-x-hidden p-3", isDark ? "bg-black" : "bg-white")}
          style={{
            padding: `${12 * scale}px ${12 * scale}px`,
            gap: 4 * scale,
          }}
        >
          {messages.map((m, i) => (
            <div key={i} className={cn("flex flex-col", m.from === "agent" ? "items-end" : "items-start")}>
              <DMBubble
                {...m}
                scale={scale}
                prev={messages[i - 1]}
                next={messages[i + 1]}
                isDark={isDark}
              />
            </div>
          ))}
          {typing && (
            <div
              className={cn("self-start flex gap-1", isDark ? "bg-white/10" : "bg-[#efefef]")}
              style={{
                padding: `${10 * scale}px ${14 * scale}px`,
                borderRadius: 18 * scale,
                marginTop: 4 * scale,
                gap: 3 * scale,
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -4, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  className={isDark ? "bg-white/40" : "bg-[#999]"}
                  style={{
                    width: 6 * scale,
                    height: 6 * scale,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div
          className={cn("border-t flex items-center", isDark ? "border-white/10" : "border-[#efefef]")}
          style={{
            padding: `${8 * scale}px ${12 * scale}px ${14 * scale}px`,
            gap: 8 * scale,
          }}
        >
          <div
            className={cn("flex-1 border flex items-center", isDark ? "bg-white/5 border-white/10 text-white/40" : "bg-white border-[#dbdbdb] text-[#8e8e8e]")}
            style={{
              height: 36 * scale,
              borderRadius: 18 * scale,
              paddingLeft: 14 * scale,
              paddingRight: 14 * scale,
              fontSize: 13 * scale,
            }}
          >
            Message...
          </div>
          <div style={{ fontSize: 18 * scale }}>🎤</div>
          <div style={{ fontSize: 18 * scale }}>🖼️</div>
        </div>
      </div>
    </div>
  );
}

interface DMBubbleProps extends Message {
  scale: number;
  prev?: Message;
  next?: Message;
  isDark?: boolean;
}

function DMBubble({ from, text, scale, prev, next, isDark }: DMBubbleProps) {
  const isAgent = from === "agent";
  const sameAsPrev = prev && prev.from === from;
  const sameAsNext = next && next.from === from;
  const radius = 18 * scale;
  const tightRadius = 6 * scale;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={cn(
        "max-w-[78%] leading-tight break-words",
        isAgent
          ? "self-end bg-[#3797f0] text-white"
          : cn("self-start", isDark ? "bg-white/10 text-white" : "bg-[#efefef] text-black")
      )}
      style={{
        padding: `${8 * scale}px ${13 * scale}px`,
        borderRadius: radius,
        borderTopLeftRadius: !isAgent && sameAsPrev ? tightRadius : radius,
        borderBottomLeftRadius: !isAgent && sameAsNext ? tightRadius : radius,
        borderTopRightRadius: isAgent && sameAsPrev ? tightRadius : radius,
        borderBottomRightRadius: isAgent && sameAsNext ? tightRadius : radius,
        fontSize: 13.5 * scale,
        marginTop: sameAsPrev ? 2 * scale : 6 * scale,
      }}
    >
      {text}
    </motion.div>
  );
}

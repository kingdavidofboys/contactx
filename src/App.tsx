import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-[#39ff14] selection:text-black font-sans relative overflow-x-hidden">
      {/* Background Grid */}
      <div className="bg-grid-pattern"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference">
        <div className="font-bold border border-white/20 px-3 py-1 tracking-widest text-xs lg:text-sm shadow-[0_0_10px_rgba(255,255,255,0.05)]">
          CONTACT-X<span className="text-[#39ff14]">®</span>
        </div>
        
        <div className="hidden md:flex items-stretch bg-[#0a0a0b]/80 border border-[#39ff14]/30 rounded-full backdrop-blur-md overflow-hidden relative shadow-[0_0_15px_rgba(57,255,20,0.1)]">
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#39ff14] to-transparent opacity-50"></div>
          {['SERVICES', 'WORK', 'ABOUT', 'BLOG', 'CAREERS'].map((item, i) => (
            <button key={item} className={`px-6 py-2.5 text-xs font-semibold tracking-widest transition-colors hover:bg-[#39ff14]/10 hover:text-[#39ff14] flex items-center gap-2 ${i === 0 ? 'text-[#39ff14]' : 'text-gray-300'}`}>
              {item}
              {i === 0 && <ChevronDown size={14} />}
            </button>
          ))}
        </div>
        
        <div className="w-[100px] hidden md:block"></div>
      </nav>

      <main className="relative z-10 pt-40 md:pt-48 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-20">
          
          {/* Hero Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-tighter text-white leading-none flex flex-col items-center">
            <span className="relative z-10">Reach</span>
            <span className="font-serif italic font-light relative z-20 text-white block my-0 lg:-my-2 pr-8">
              <span className="relative z-10">New</span>
              {/* Ellipse accent */}
              <svg className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-1/2 w-[180%] h-[200%] text-white opacity-80 pointer-events-none" viewBox="0 0 200 100">
                <ellipse cx="100" cy="50" rx="90" ry="25" fill="none" stroke="currentColor" strokeWidth="1" className="rotate-[-6deg] origin-center" />
                {/* Little sparkle on ring */}
                <path d="M 180 30 L 185 25 L 190 30 M 185 25 L 185 35" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </span>
            <span className="relative z-10">Horizons</span>
          </h1>

          <button className="mt-16 px-8 py-3 rounded-full border border-[#39ff14] text-[#39ff14] font-medium text-xs md:text-sm tracking-widest hover:bg-[#39ff14] hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]">
            Get Started
          </button>
        </div>

        {/* The Horizon Interface Glow & Radar Area */}
        <div className="mt-10 lg:mt-20 w-full relative z-10">
          
          {/* Green Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#39ff14] opacity-[0.07] blur-[120px] rounded-full pointer-events-none"></div>
          
          {/* Curvature Line representing horizon */}
          <div className="w-full h-[500px] md:h-[550px] relative overflow-hidden -mt-[60px] md:-mt-[100px] pointer-events-none">
            <div className="absolute top-[80px] md:top-[110px] left-1/2 -translate-x-1/2 w-[200vw] md:w-[120vw] h-[200vw] md:h-[120vw] bg-[#0a0a0b] border-t border-[#39ff14]/30 rounded-[100%] shadow-[0_-30px_80px_rgba(57,255,20,0.15)] flex flex-col items-center pt-24 z-20 pointer-events-auto">
              
              {/* Tagline Paragraph */}
              <div className="w-[90vw] md:w-auto max-w-4xl lg:max-w-5xl mx-auto px-4 md:px-8 text-center mt-12 md:mt-20">
                <p className="text-[clamp(1.125rem,2.5vw,2.25rem)] leading-relaxed md:leading-snug text-gray-200 text-balance mx-auto">
                  <span className="font-sans uppercase tracking-tight">CONTACT-X </span>
                  <span className="font-serif italic text-gray-400 font-light">is an autonomous </span>
                  <span className="font-sans uppercase tracking-tight">OPERATIONAL SYSTEMS, INFRASTRUCTURE </span>
                  <span className="font-serif italic text-gray-400 font-light">and </span>
                  <span className="font-sans uppercase tracking-tight">DATA ARCHITECTURE ENGINE </span>
                  <span className="font-serif italic text-gray-400 font-light">that helps </span>
                  <span className="font-sans uppercase tracking-tight">ELITE CREATIVE </span>
                  <span className="font-serif italic text-gray-400 font-light">and </span>
                  <span className="font-sans uppercase tracking-tight">COMMERCIAL PRODUCTION HOUSES ELIMINATE MANUAL BOTTLENECK.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Grid Capabilities Section */}
      <section className="relative z-20 bg-[#0a0a0b] py-24 pb-40 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: '01 /', title: 'ZERO-TOUCH LEAD PROCESSING', desc: 'Automated scraping pipelines ingest, validate, and enrich inbound commercial leads instantly. High-ticket inquiries are prioritized and routed with absolute contextual memory.' },
            { id: '02 /', title: 'SELF-HEALING WORKFLOWS', desc: 'Multi-agent automation infrastructure built with strict runtime error loops. If a token mismatch occurs or an API endpoint drops, the system self-corrects without breaking production pipelines.' },
            { id: '03 /', title: 'THE CONNECTED NERVOUS SYSTEM', desc: 'Unifying fragmented toolchains into a singular source of truth. Your asset ingestion pipelines, client scheduling protocols, and invoicing engines communicate seamlessly under one custom framework.' }
          ].map(item => (
            <div key={item.id} className="group border border-white/10 p-8 hover:border-[#39ff14]/50 transition-all duration-300 bg-[#121213]/40 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39ff14] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="text-[#39ff14] font-mono text-sm mb-8 font-medium">{item.id}</div>
              <h3 className="text-white font-sans text-xl mb-4 tracking-wide">{item.title}</h3>
              <p className="font-serif italic text-gray-400 text-lg leading-relaxed">{item.desc}</p>
              
              <div className="mt-12 h-[2px] w-0 bg-[#39ff14] transition-all duration-500 group-hover:w-12 shadow-[0_0_10px_#39ff14]"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Operational Intelligence Section */}
      <section className="relative z-20 bg-[#0a0a0b] py-32 px-6 overflow-hidden border-t border-white/5">
        {/* Section Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center px-6 mb-20 relative z-30">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-white mb-6 leading-tight">
            Standardizing <span className="font-serif italic font-light text-gray-300">operational</span><br />
            intelligence for elite studios.
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 font-sans text-sm md:text-base leading-relaxed">
            We replace fragmented manual toolchains with self-correcting data architecture. Our custom frameworks stabilize lead processing, asset delivery, and multi-agent coordination, enabling absolute operational stability.
          </p>
        </div>

        <div className="relative w-full max-w-[900px] min-h-[400px] sm:min-h-[500px] md:min-h-[800px] mx-auto z-20 flex items-center justify-center">
          {/* Radial Smoky Green Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.12) 0%, #00000000 70%)' }}></div>

          {/* Diagram Container */}
          <div className="relative w-[800px] h-[800px] scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 origin-center z-10 transition-transform duration-500">
            {/* Core SVG Diagram */}
            <svg viewBox="0 0 800 800" className="absolute inset-0 w-full h-full text-white">
              {/* Dense Concentric Radar Rings */}
              {/* Pentagonal Matrix */}
              <polygon points="400,120 666.3,313.5 564.4,626.5 235.6,626.5 133.7,313.5" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="2 4" />
              <polygon points="400,190 599.7,335.1 523.3,569.9 276.7,569.9 200.3,335.1" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
              <polygon points="400,260 533.2,356.8 482.2,513.3 317.8,513.3 266.9,356.8" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />
              <polygon points="400,330 466.6,378.4 441.1,456.6 358.9,456.6 333.4,378.4" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="1 3" />
              
              {/* Circular Layers */}
              <circle cx="400" cy="400" r="140" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="1 2" />
              <circle cx="400" cy="400" r="210" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="2 4" />
              <circle cx="400" cy="400" r="280" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <circle cx="400" cy="400" r="340" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="2 8" />
              <circle cx="400" cy="400" r="400" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

              {/* Connecting spokes */}
              <line x1="400" y1="400" x2="400" y2="120" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="400" y1="400" x2="666.3" y2="313.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="400" y1="400" x2="564.4" y2="626.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="400" y1="400" x2="235.6" y2="626.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="400" y1="400" x2="133.7" y2="313.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

              {/* Connecting line to Call-Out Box */}
              <path d="M 500 400 L 680 400" stroke="rgba(57,255,20,0.3)" strokeWidth="1" strokeDasharray="2 2" className="hidden md:block" />

              {/* Dotted pointing line from Lead Ingestion & Vetting Header to its Explanatory Callout Box */}
              <path d="M 510,65 C 550,65 580,105 620,105" stroke="#39ff14" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.5" className="hidden lg:block" />
              <circle cx="510" cy="65" r="2" fill="#39ff14" opacity="0.8" className="hidden lg:block" />
              <rect x="618" y="103" width="4" height="4" fill="#39ff14" opacity="0.8" className="hidden lg:block" />

              {/* Dotted pointing line from Operational Memory Header/Node to its Explanatory Callout Box */}
              <path d="M 125,313.5 L 50,313.5 L 50,370" stroke="#39ff14" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.5" className="hidden lg:block" />
              <circle cx="125" cy="313.5" r="2" fill="#39ff14" opacity="0.8" className="hidden lg:block" />
              <rect x="48" y="368" width="4" height="4" fill="#39ff14" opacity="0.8" className="hidden lg:block" />

              {/* Star-burst accent icon (Top Right Quadrant) */}
              <g transform="translate(560, 240) scale(0.8)" fill="none" stroke="#39ff14" strokeWidth="1.5">
                <path d="M 0,-15 L 0,15 M -15,0 L 15,0 M -10,-10 L 10,10 M -10,10 L 10,-10" opacity="0.6" />
                <circle cx="0" cy="0" r="3" fill="#39ff14" />
              </g>
              <g transform="translate(320, 680) scale(0.5)" fill="none" stroke="#39ff14" strokeWidth="1">
                <path d="M 0,-10 L 0,10 M -10,0 L 10,0" opacity="0.6" />
              </g>
              <circle cx="280" cy="200" r="1.5" fill="#39ff14" opacity="0.5" />

              {/* Nodes */}
              <circle cx="400" cy="120" r="8" fill="#0a0a0b" stroke="#39ff14" strokeWidth="2" />
              <circle cx="666.3" cy="313.5" r="8" fill="#0a0a0b" stroke="#39ff14" strokeWidth="2" />
              <circle cx="564.4" cy="626.5" r="8" fill="#0a0a0b" stroke="#39ff14" strokeWidth="2" />
              <circle cx="235.6" cy="626.5" r="8" fill="#0a0a0b" stroke="#39ff14" strokeWidth="2" />
              <circle cx="133.7" cy="313.5" r="8" fill="#0a0a0b" stroke="#39ff14" strokeWidth="2" />
            </svg>

            {/* Central Text - Hidden on mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none w-64 hidden md:block">
              <h3 className="font-sans tracking-widest text-[#39ff14] font-medium text-lg leading-snug">
                <span className="text-white uppercase">CONTACT-X CORE</span> <br/>
                <span className="text-[10px] tracking-[0.3em] opacity-80 mt-2 block font-mono">/* OPERATIONAL FRAMEWORK */</span>
              </h3>
            </div>

            {/* Labels - Hidden on mobile */}
            {/* Node 01 */}
            <div className="absolute top-[55px] left-[400px] -translate-x-1/2 hidden md:flex items-start z-30">
              <span className="text-[#39ff14] font-mono text-[10px] mr-1.5 mt-0.5">01</span>
              <span className="text-[#39ff14] text-sm tracking-widest uppercase border-b border-[#39ff14]/50 pb-0.5 whitespace-nowrap">LEAD INGESTION & VETTING</span>
            </div>

            {/* Node 02 */}
            <div className="absolute top-[313.5px] left-[666.3px] ml-5 -mt-3 hidden md:flex items-start">
              <span className="text-[#39ff14] font-mono text-[10px] mr-1.5 mt-0.5">02</span>
              <span className="text-[#39ff14] text-sm tracking-widest uppercase border-b border-[#39ff14]/50 pb-0.5 whitespace-nowrap">ASSET LIFECYCLE ARCHITECTURE</span>
            </div>

            {/* Node 03 */}
            <div className="absolute top-[626.5px] left-[564.4px] ml-1 mt-6 hidden md:flex items-start">
              <span className="text-[#39ff14] font-mono text-[10px] mr-1.5 mt-0.5">03</span>
              <span className="text-[#39ff14] text-sm tracking-widest uppercase border-b border-[#39ff14]/50 pb-0.5 whitespace-nowrap">INTELLIGENT CLIENT CONCIERGE</span>
            </div>

            {/* Node 04 */}
            <div className="absolute top-[626.5px] left-[235.6px] -ml-2 -translate-x-full mt-6 hidden md:flex items-start">
              <span className="text-[#39ff14] font-mono text-[10px] mr-1.5 mt-0.5">04</span>
              <span className="text-[#39ff14] text-sm tracking-widest uppercase border-b border-[#39ff14]/50 pb-0.5 whitespace-nowrap">SELF-HEALING WORKFLOW LOGS</span>
            </div>

            {/* Node 05 */}
            <div className="absolute top-[260px] left-[133.7px] -ml-8 -translate-x-full hidden md:flex items-start z-30">
              <span className="text-[#39ff14] font-mono text-[10px] mr-1.5 mt-0.5">05</span>
              <span className="text-[#39ff14] text-sm tracking-widest uppercase border-b border-[#39ff14]/50 pb-0.5 whitespace-nowrap">CONTEXTUAL OPERATIONAL MEMORY</span>
            </div>

            {/* Call out Box 01 */}
            <div className="absolute top-[70px] left-[620px] w-[190px] p-4 rounded border border-[#39ff14]/40 bg-[#0a0a0b]/90 backdrop-blur-md shadow-[0_0_20px_rgba(57,255,20,0.05)] z-20 hidden lg:block text-left">
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Multi-channel lead data is scraped, normalized, and contextualized. Automated workflows prioritize high-volume and premium opportunities with instant operational visibility.
              </p>
            </div>

            {/* Call out Box 02 */}
            <div className="absolute top-[380px] left-[680px] w-[260px] p-4 rounded border border-[#39ff14]/40 bg-[#0a0a0b]/90 backdrop-blur-md -translate-y-1/2 shadow-[0_0_20px_rgba(57,255,20,0.05)] z-20 hidden lg:block">
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Viewing the invisible operational structure of a self-correcting creative studio framework.
              </p>
            </div>

            {/* Call out Box 03 */}
            <div className="absolute top-[680px] left-[520px] w-[260px] p-4 rounded border border-[#39ff14]/40 bg-[#0a0a0b]/90 backdrop-blur-md shadow-[0_0_20px_rgba(57,255,20,0.05)] z-20 hidden lg:block">
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                A conversational terminal [Telegram/WhatsApp] acts as a dedicated client touchpoint. Automation handles standard updates, scheduling, and asset requests with real-time context.
              </p>
            </div>

            {/* Call out Box 04 */}
            <div className="absolute top-[680px] left-[30px] w-[260px] p-4 rounded border border-[#39ff14]/40 bg-[#0a0a0b]/90 backdrop-blur-md shadow-[0_0_20px_rgba(57,255,20,0.05)] z-20 hidden lg:block">
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                System processes are continuously audited. Real-time error detection enables automated corrective loops for token mismatches, API timeouts, and data sync breaks.
              </p>
            </div>

            {/* Call out Box 05 */}
            <div className="absolute top-[370px] left-[-150px] w-[240px] p-4 rounded border border-[#39ff14]/40 bg-[#0a0a0b]/90 backdrop-blur-md shadow-[0_0_20px_rgba(57,255,20,0.05)] z-20 hidden lg:block text-left">
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Operational data is synchronized into a robust, integrated database [Supabase]. All workflow states, client context, and asset metadata are accessible to any multi-agent process.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Data List (Visible only on medium screens and below) */}
        <div className="lg:hidden w-full max-w-2xl mx-auto mt-8 flex flex-col gap-4 relative z-30">
          {[
            { id: '01', title: 'LEAD INGESTION & VETTING', desc: 'Multi-channel lead data is scraped, normalized, and contextualized. Automated workflows prioritize high-volume and premium opportunities with instant operational visibility.' },
            { id: '02', title: 'ASSET LIFECYCLE ARCHITECTURE', desc: 'Viewing the invisible operational structure of a self-correcting creative studio framework.' },
            { id: '03', title: 'INTELLIGENT CLIENT CONCIERGE', desc: 'A conversational terminal [Telegram/WhatsApp] acts as a dedicated client touchpoint. Automation handles standard updates, scheduling, and asset requests with real-time context.' },
            { id: '04', title: 'SELF-HEALING WORKFLOW LOGS', desc: 'System processes are continuously audited. Real-time error detection enables automated corrective loops for token mismatches, API timeouts, and data sync breaks.' },
            { id: '05', title: 'CONTEXTUAL OPERATIONAL MEMORY', desc: 'Operational data is synchronized into a robust, integrated database [Supabase]. All workflow states, client context, and asset metadata are accessible to any multi-agent process.' }
          ].map((node) => (
            <div key={node.id} className="p-5 border border-[#39ff14]/20 bg-[#0a0a0b]/80 rounded border-l-2 border-l-[#39ff14] backdrop-blur-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <span className="text-[#39ff14] font-mono text-xs opacity-70">{node.id} // </span>
                <h4 className="text-[#39ff14] text-sm tracking-widest uppercase font-medium">{node.title}</h4>
              </div>
              <p className="text-gray-400 font-sans text-sm leading-relaxed relative z-10">
                {node.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies / System Transformations Section */}
      <section className="relative z-20 bg-[#0a0a0b] min-h-screen py-32 overflow-hidden border-t border-white/5 flex flex-col items-center justify-center">
        {/* Layout Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

        {/* Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.08) 0%, transparent 70%)' }}></div>

        {/* Main Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center mt-20 mb-32 md:mt-0 md:mb-0">
          
          {/* Central Text & Button Node */}
          <div className="text-center z-30 mb-20 md:mb-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <h4 className="text-gray-500 font-sans text-xs sm:text-sm tracking-[0.3em] uppercase mb-6">SYSTEM TRANSFORMATIONS</h4>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] text-white leading-none mb-10 flex flex-col items-center gap-2">
              <span className="font-serif italic font-light tracking-tight text-gray-200">Engineered</span>
              <span className="font-sans font-bold tracking-tighter uppercase whitespace-nowrap">Deployments</span>
            </h2>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-black border border-[#39ff14]/60 text-white font-sans text-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-shadow duration-300">
              <span className="tracking-wide">Explore System Architecture</span>
            </button>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full h-full gap-16 md:gap-0 mt-32 md:mt-0">
            
            {/* Left Card */}
            <div className="w-full md:w-[380px] lg:w-[420px] aspect-[4/5] bg-[#0c0c0e] rounded-xl border border-white/10 md:-rotate-12 hover:rotate-0 transition-transform duration-700 ease-out shadow-2xl relative overflow-hidden group flex flex-col justify-end p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              {/* Optional Placeholder for a subtle structural image background if desired */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-block px-3 py-1 bg-[#39ff14]/10 border border-[#39ff14]/30 rounded-full text-[#39ff14] text-xs font-mono mb-4 backdrop-blur-sm">
                  +340% Lead Velocity
                </div>
                <h3 className="text-3xl font-sans font-bold text-white tracking-tight leading-none mb-3 uppercase">
                  THE SCALED <br /> PIPELINE
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Reengineering inbound capture logic for high-volume commercial rental houses.
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div className="w-full md:w-[380px] lg:w-[420px] aspect-[4/5] bg-[#0c0c0e] rounded-xl border border-white/10 md:rotate-12 hover:rotate-0 transition-transform duration-700 ease-out shadow-2xl relative overflow-hidden group flex flex-col justify-end p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              {/* Optional Placeholder for a subtle structural image background if desired */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-block px-3 py-1 bg-[#39ff14]/10 border border-[#39ff14]/30 rounded-full text-[#39ff14] text-xs font-mono mb-4 backdrop-blur-sm">
                  180+ Hours Reclaimed
                </div>
                <h3 className="text-3xl font-sans font-bold text-white tracking-tight leading-none mb-3 uppercase">
                  ZERO-TOUCH <br /> ASSIMILATION
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Implementing self-healing multi-agent scheduling frameworks for premium creative studios.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Integration Ticker */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden py-6 border-t border-white/5 bg-[#0a0a0b]/80 backdrop-blur-sm z-30">
          <div className="flex whitespace-nowrap animate-[scroll_40s_linear_infinite]">
            {/* Ticker Content - Duplicated for seamless scrolling */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-8 text-gray-500 font-mono text-xs tracking-[0.2em]">
                <span>SUPABASE</span>
                <span className="text-gray-700">//</span>
                <span>APIFY</span>
                <span className="text-gray-700">//</span>
                <span>STRIPE</span>
                <span className="text-gray-700">//</span>
                <span>TELEGRAM API</span>
                <span className="text-gray-700">//</span>
                <span>CAPTURE ONE</span>
                <span className="text-gray-700">//</span>
                <span>POSTGRESQL</span>
                <span className="text-gray-700">//</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Performance Benchmarks Section */}
      <section className="relative z-20 bg-[#0a0a0b] py-32 px-6 overflow-hidden border-t border-white/5">
        {/* Layout Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
        
        {/* Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.06) 0%, transparent 70%)' }}></div>

        <div className="max-w-7xl mx-auto relative z-30">
          
          {/* Header */}
          <div className="text-center mb-16 md:mb-24 relative">
            <h4 className="text-gray-500 font-sans text-xs sm:text-sm tracking-[0.3em] uppercase mb-6">PERFORMANCE PARAMETERS</h4>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-white leading-none flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
              <span className="font-sans font-bold tracking-tighter uppercase whitespace-nowrap">QUANTIFIABLE</span>
              <span className="font-serif italic font-light tracking-tight text-gray-200">Efficiency</span>
            </h2>
          </div>

          {/* Three-Card Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* Card 1: Data Block */}
            <div className="bg-[#0c0c0e]/80 backdrop-blur-md rounded-3xl border border-[#39ff14] p-8 lg:p-10 flex flex-col justify-between shadow-[0_0_30px_rgba(57,255,20,0.05)] relative overflow-hidden group">
               <div className="relative z-10 mb-12">
                 <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-8 bg-black/50">
                    <span className="text-xs font-sans font-bold tracking-widest text-[#39ff14]">SYS</span>
                 </div>
                 <h3 className="text-white font-sans text-2xl font-semibold tracking-tight uppercase mb-4">ENGINE BENCHMARKS</h3>
                 <p className="text-gray-400 font-sans text-sm leading-relaxed">
                   Runtime data tracking across active studio infrastructure deployments. Our architectures are engineered for high-volume data handling with zero manual overhead.
                 </p>
               </div>

               <div className="grid grid-cols-2 gap-x-6 gap-y-10 relative z-10 pt-6">
                 <div>
                   <div className="text-4xl lg:text-5xl font-sans font-bold text-white tracking-tighter mb-2">0ms</div>
                   <div className="text-gray-500 font-sans text-xs uppercase tracking-widest">Lead Latency</div>
                 </div>
                 <div>
                   <div className="text-4xl lg:text-5xl font-sans font-bold text-white tracking-tighter mb-2">99.9%</div>
                   <div className="text-gray-500 font-sans text-xs uppercase tracking-widest">Operational Uptime</div>
                 </div>
                 <div>
                   <div className="text-4xl lg:text-5xl font-sans font-bold text-white tracking-tighter mb-2">180h</div>
                   <div className="text-gray-500 font-sans text-xs uppercase tracking-widest">Reclaimed Monthly</div>
                 </div>
                 <div>
                   <div className="text-4xl lg:text-5xl font-sans font-bold text-white tracking-tighter mb-2">100%</div>
                   <div className="text-gray-500 font-sans text-xs uppercase tracking-widest">Data Continuity</div>
                 </div>
               </div>
            </div>

            {/* Card 2: System Visual */}
            <div className="bg-[#0c0c0e] rounded-3xl border border-white/10 aspect-[4/5] md:aspect-auto flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 pointer-events-none"></div>
               <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] transition-transform duration-700 group-hover:scale-105"></div>
               <div className="relative z-20 px-4 py-2 border border-white/10 bg-black/50 backdrop-blur-md rounded-full text-center">
                 <span className="font-mono text-[10px] text-gray-400 tracking-[0.2em] uppercase">[ SYSTEM_PIPELINE_FLOW // ACTIVE ]</span>
               </div>
            </div>

            {/* Card 3: System Visual */}
            <div className="bg-[#0c0c0e] rounded-3xl border border-white/10 aspect-[4/5] md:aspect-auto flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 pointer-events-none"></div>
               <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] transition-transform duration-700 group-hover:scale-105"></div>
               <div className="relative z-20 px-4 py-2 border border-white/10 bg-black/50 backdrop-blur-md rounded-full text-center">
                 <span className="font-mono text-[10px] text-gray-400 tracking-[0.2em] uppercase">[ SUPABASE_DATA_NODE ]</span>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Briefings Section */}
      <section className="relative z-20 bg-[#0a0a0b] py-32 px-6 overflow-hidden border-t border-white/5">
        {/* Layout Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-30">
          
          {/* Header */}
          <div className="text-center mb-16 md:mb-24 relative">
            <h4 className="text-gray-500 font-sans text-xs sm:text-sm tracking-[0.3em] uppercase mb-6">KNOWLEDGE BASE</h4>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-white leading-none flex flex-col items-center justify-center gap-3">
              <span className="font-sans font-bold tracking-tighter uppercase whitespace-nowrap">TECHNICAL</span>
              <span className="font-serif italic font-light tracking-tight text-gray-200">Briefings</span>
            </h2>
          </div>

          {/* Two-Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start mb-20">
            
            {/* Card 1 */}
            <div className="flex flex-col group cursor-pointer items-center">
              {/* Visual Asset (Card container) */}
              <div className="w-full bg-[#0c0c0e] rounded-[32px] border border-white/5 aspect-[4/3] md:aspect-[1.2] mb-8 overflow-hidden relative flex items-center justify-center group-hover:border-white/10 transition-colors duration-500 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 to-transparent opacity-30"></div>
                
                {/* Abstract Database Schema Placeholder */}
                <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 relative z-10 transition-transform duration-700 group-hover:scale-105">
                  <rect x="20" y="80" width="40" height="40" rx="8" stroke="#39ff14" strokeWidth="1.5" className="fill-[#0a0a0b]"/>
                  <rect x="140" y="30" width="40" height="40" rx="8" stroke="#39ff14" strokeWidth="1.5" className="fill-[#0a0a0b]"/>
                  <rect x="140" y="130" width="40" height="40" rx="8" stroke="#39ff14" strokeWidth="1.5" className="fill-[#0a0a0b]"/>
                  
                  {/* Connectors */}
                  <path d="M60 100H100" stroke="white" strokeWidth="1.5" strokeDasharray="3 3"/>
                  <path d="M100 50V150" stroke="white" strokeWidth="1.5" strokeDasharray="3 3"/>
                  <path d="M100 50H140" stroke="white" strokeWidth="1.5" strokeDasharray="3 3"/>
                  <path d="M100 150H140" stroke="white" strokeWidth="1.5" strokeDasharray="3 3"/>
                  
                  {/* Center Node */}
                  <circle cx="100" cy="100" r="4" fill="#39ff14" className="animate-pulse"/>
                </svg>
              </div>
              
              {/* Text Hierarchy */}
              <div className="text-center px-4 max-w-lg">
                <div className="text-[#39ff14] font-mono text-[10px] tracking-[0.2em] uppercase mb-4 font-semibold">BY CONTACT-X SYSTEMS</div>
                <h3 className="text-white font-sans text-xl md:text-2xl font-medium tracking-tight leading-snug">
                  The Operational Blueprint: Optimizing Pipeline Velocity in Multi-Studio Commercial Complexes.
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col group cursor-pointer items-center">
              {/* Visual Asset (Card container) */}
              <div className="w-full bg-[#0c0c0e] rounded-[32px] border border-white/5 aspect-[4/3] md:aspect-[1.2] mb-8 overflow-hidden relative flex items-start justify-start p-8 md:p-12 group-hover:border-white/10 transition-colors duration-500 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#39ff14]/[0.02] to-black opacity-80"></div>
                
                {/* Terminal Code Logs Placeholder */}
                <div className="relative z-10 w-full font-mono text-[10px] md:text-xs text-gray-500 leading-loose flex flex-col items-start justify-start opacity-60 transition-transform duration-700 group-hover:translate-x-2">
                  <span className="text-[#39ff14] opacity-80">&gt; sys.init_sequence --force-sync</span>
                  <span className="mt-2 text-gray-400">[OK] Establishing handshake with Cluster_04...</span>
                  <span className="text-gray-400">[WAIT] Querying remote datastore payload</span>
                  <span className="text-[#39ff14] opacity-80">[OK] Handshake verified. Latency: 12ms</span>
                  <span className="mt-2 text-gray-400">Executing serverless_routine.ts <span className="animate-pulse">_</span></span>
                  <span className="mt-2 text-gray-600">{"{"}</span>
                  <span className="pl-4 text-gray-500">"status": "operational",</span>
                  <span className="pl-4 text-gray-500">"failover_active": false,</span>
                  <span className="pl-4 text-gray-500">"retries": 0</span>
                  <span className="text-gray-600">{"}"}</span>
                  <span className="mt-2 text-[#39ff14] opacity-80">Process complete. Terminating.</span>
                </div>
              </div>
              
              {/* Text Hierarchy */}
              <div className="text-center px-4 max-w-lg">
                <div className="text-[#39ff14] font-mono text-[10px] tracking-[0.2em] uppercase mb-4 font-semibold">BY CONTACT-X SYSTEMS</div>
                <h3 className="text-white font-sans text-xl md:text-2xl font-medium tracking-tight leading-snug">
                  Data Architecture: Mitigating Runtime Failures and API Timeouts in Serverless Studio Automations.
                </h3>
              </div>
            </div>

          </div>

          {/* Central Button */}
          <div className="flex justify-center">
            <button className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-black border border-[#39ff14]/50 text-white font-sans text-sm hover:shadow-[0_0_25px_rgba(57,255,20,0.25)] transition-all duration-300">
              <span className="tracking-wide">Access Engineering Vault</span>
            </button>
          </div>
        </div>
      </section>

      {/* Operational Validation Section */}
      <section className="relative z-20 bg-[#0a0a0b] py-32 px-6 overflow-hidden border-t border-white/5">
        {/* Layout Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-30 flex flex-col items-center text-center">
          
          {/* Header */}
          <div className="mb-20 relative z-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-white leading-none flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="font-sans font-bold tracking-tighter uppercase whitespace-nowrap">EMPIRICAL</span>
              <span className="font-serif italic font-light tracking-tight text-gray-200">Validation</span>
            </h2>
          </div>

          {/* Background Vector Graphic & Rotating 3D Green Compass */}
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] pointer-events-none z-0 flex justify-center items-center opacity-40">
            {/* The base wave vector lines */}
            <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none" className="absolute inset-0">
               <path d="M 0,200 C 150,200 200,50 350,50 C 500,50 500,350 650,350 C 800,350 850,200 1000,200" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
               <path d="M 0,200 C 150,200 200,350 350,350 C 500,350 500,50 650,50 C 800,50 850,200 1000,200" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 6" />
               <line x1="0" y1="200" x2="1000" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </svg>

            {/* Rotating Greenish 3D Arrow / Compass Sphere */}
            <div className="relative w-96 h-96 flex items-center justify-center scale-75 sm:scale-100">
              {/* Outer slow-spinning compass ring with ticks */}
              <div className="absolute inset-0 w-full h-full border border-[#39ff14]/10 rounded-full animate-[spin_40s_linear_infinite] flex items-center justify-center">
                {/* Visual arrow markings on the ring */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0 text-[#39ff14]/20">
                  <path d="M 50,2 L 53,8 L 47,8 Z" fill="currentColor" />
                  <path d="M 50,98 L 53,92 L 47,92 Z" fill="currentColor" />
                  <path d="M 2,50 L 8,53 L 8,47 Z" fill="currentColor" />
                  <path d="M 98,50 L 92,53 L 92,47 Z" fill="currentColor" />
                  {/* Circular segment borders for high tech look */}
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" fill="none" />
                </svg>
              </div>

              {/* Inner fast-spinning 3D multi-layered arrow ring (opposite direction) */}
              <div className="absolute w-[80%] h-[80%] border border-[#39ff14]/15 rounded-full animate-[spin_20s_linear_infinite_reverse] flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0 text-[#39ff14]/30">
                  {/* Elegant curved arrow segment 01 */}
                  <path d="M 12 50 A 38 38 0 0 1 50 12" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3" />
                  <path d="M 50 12 L 45 15 L 47 10 Z" fill="currentColor" />
                  {/* Elegant curved arrow segment 02 */}
                  <path d="M 88 50 A 38 38 0 0 1 50 88" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3" />
                  <path d="M 50 88 L 55 85 L 53 90 Z" fill="currentColor" />
                </svg>
                
                {/* A third tilted diagonal ring for 3D gyro-scope feeling */}
                <div className="absolute w-full h-1/4 border border-[#39ff14]/20 rounded-full rotate-45 animate-pulse"></div>
                <div className="absolute w-1/4 h-full border border-[#39ff14]/10 rounded-full -rotate-45"></div>
              </div>

              {/* Bright glowing nexus core in the center */}
              <div className="absolute w-4 h-4 bg-[#39ff14]/20 rounded-full flex items-center justify-center blur-[1px]">
                <div className="w-1.5 h-1.5 bg-[#39ff14] rounded-full shadow-[0_0_8px_#39ff14]"></div>
              </div>

              {/* Radial green ambient lighting wash strictly behind center */}
              <div className="absolute w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(57,255,20,0.08) 0%, transparent 70%)' }}></div>
            </div>
          </div>

          {/* Quote Block */}
          <div className="relative z-10 max-w-4xl mx-auto mb-12 px-4">
             <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-white leading-snug md:leading-relaxed text-center">
               "Managing multi-studio allocation and inbound creative briefs across disjointed channels was costing our operations team significant overhead every week. Contact-X completely re-engineered our data layer. The autonomous triage engine stabilized our pipeline velocity and completely eliminated manual synchronization bottlenecks."
             </p>
          </div>

          {/* Attribution */}
          <div className="relative z-10 mt-4">
            <div className="inline-block px-5 py-2">
               <span className="text-[#39ff14] font-mono text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold">OPERATIONS DIRECTOR // COMMERCIAL PRODUCTION COMPLEX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer Call to Action Section */}
      <section className="relative z-20 bg-[#0a0a0b] py-32 px-6 overflow-hidden border-t border-white/5 text-center flex flex-col items-center justify-center">
        {/* Layout Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

        {/* Subtle Green Ambient Glow strictly in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.04) 0%, transparent 70%)' }}></div>

        <div className="max-w-4xl mx-auto relative z-30 flex flex-col items-center">
          
          {/* Rotating System Badge */}
          <div className="relative w-44 h-44 flex items-center justify-center mb-10 group">
            {/* Ambient inner aura */}
            <div className="absolute w-24 h-24 rounded-full bg-[#39ff14]/5 blur-md pointer-events-none"></div>
            
            {/* Globe SVG lines */}
            <svg viewBox="0 0 100 100" className="absolute w-24 h-24 text-[#39ff14]/30 z-10 transition-colors duration-500 group-hover:text-[#39ff14]/50" fill="none" stroke="currentColor" strokeWidth="0.75">
              <circle cx="50" cy="50" r="45" />
              <ellipse cx="50" cy="50" rx="22" ry="45" />
              <ellipse cx="50" cy="50" rx="9" ry="45" />
              <line x1="5" y1="50" x2="95" y2="50" />
              <path d="M 12 25 L 88 25" />
              <path d="M 12 75 L 88 75" />
            </svg>
            
            {/* Spinning Text SVG */}
            <svg viewBox="0 0 200 200" className="absolute w-full h-full animate-[spin_30s_linear_infinite] z-20">
              <defs>
                <path id="ctaTextPath" d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
              </defs>
              <text className="font-mono text-[8.5px] tracking-[0.09em] fill-[#39ff14]/60 font-medium">
                <textPath href="#ctaTextPath" startOffset="0%">
                  INTELLIGENCE • AUTOMATION • CAPABILITY • INFRASTRUCTURE • INTELLIGENCE • AUTOMATION • CAPABILITY • INFRASTRUCTURE •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Typography Hierarchy */}
          <h4 className="text-gray-500 font-sans text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 relative">SYSTEM ACCESS</h4>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-12 max-w-3xl flex flex-col items-center gap-2">
            <span className="font-sans font-bold tracking-tighter uppercase text-center">Initialize Your Operational</span>
            <span className="font-serif italic font-light tracking-tight text-gray-200 text-center">Autonomy.</span>
          </h2>

          {/* High-Ticket CTA Button */}
          <div className="flex justify-center flex-col items-center">
            <button className="group relative inline-flex items-center justify-center px-10 py-5 rounded-full bg-black border border-[#39ff14]/50 text-white font-mono text-xs tracking-[0.2em] font-medium hover:border-[#39ff14] hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300">
              <span className="text-[#39ff14]/90 group-hover:text-[#39ff14]">REQUEST OPERATIONAL BRIEFING</span>
            </button>
          </div>

        </div>
      </section>

      {/* Premium Dark Footer */}
      <footer className="relative z-20 bg-[#0a0a0b] pt-24 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden flex flex-col items-center">
        {/* Soft, smoky, low-intensity green radial gradient glow running horizontally across the floor at the bottom edge */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] rounded-full pointer-events-none z-0 opacity-40 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.06) 0%, transparent 80%)' }}></div>

        <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Top-Center Asset */}
          <div className="mb-16 flex flex-col items-center">
            {/* Minimalist technical system mark */}
            <span className="font-mono text-[9px] text-[#39ff14]/60 tracking-[0.25em] uppercase px-3 py-1 border border-[#39ff14]/20 rounded-sm bg-black/40">
              [ SYS // COR ]
            </span>
          </div>

          {/* Core Footer content split into Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5 items-start">
            
            {/* Left-Side Gateway Form - 7 Cols */}
            <div className="lg:col-span-7 flex flex-col items-start max-w-xl">
              <h3 className="text-3xl sm:text-4xl text-white font-sans font-bold tracking-tight uppercase leading-tight mb-6">
                <span className="font-serif italic font-light text-gray-200 lowercase mr-2">Establish</span> 
                System Connection.
              </h3>
              
              {/* Form Row */}
              <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md items-stretch gap-2">
                <input 
                  type="email" 
                  placeholder="ENTER ENTERPRISE EMAIL //" 
                  className="flex-1 bg-black border border-white/10 rounded-sm px-4 py-3 text-xs font-mono text-white placeholder-gray-600 focus:outline-none focus:border-[#39ff14]/40 transition-colors"
                />
                <button 
                  type="submit"
                  className="bg-black border border-white/10 rounded-sm px-5 py-3 text-xs font-mono text-gray-400 hover:text-[#39ff14] hover:border-[#39ff14]/40 transition-all duration-300"
                >
                  [ INIT ]
                </button>
              </form>
            </div>

            {/* Right-Side Directory Columns - 5 Cols */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-8 w-full">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-sans font-semibold tracking-[0.2em] text-gray-500 uppercase">INFRASTRUCTURE</h4>
                <ul className="flex flex-col gap-2.5">
                  {["The Engine", "Core Framework", "Live Benchmarks", "System Architecture"].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-xs font-sans text-gray-400 hover:text-white transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-sans font-semibold tracking-[0.2em] text-gray-500 uppercase">PROTOCOL</h4>
                <ul className="flex flex-col gap-2.5">
                  {["Technical Briefings", "Engineering Vault", "Security Parameters", "Core Memory"].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-xs font-sans text-gray-400 hover:text-white transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Absolute Bottom Asset */}
          <div className="w-full pt-8 flex flex-col items-center gap-4">
            <span className="text-[10px] font-mono text-gray-600 tracking-[0.2em] uppercase">
              ©2026 CONTACT-X // ALL SYSTEMS OPERATIONAL
            </span>
            
            {/* Tiny, minimalist wireframe globe icon centered directly below */}
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-gray-700 animate-[spin_60s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="0.75">
              <circle cx="50" cy="50" r="45" />
              <ellipse cx="50" cy="50" rx="22" ry="45" />
              <ellipse cx="50" cy="50" rx="9" ry="45" />
              <line x1="5" y1="50" x2="95" y2="50" />
            </svg>
          </div>

        </div>
      </footer>
    </div>
  );
}

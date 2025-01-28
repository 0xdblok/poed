import Image from "next/image";


import logos from "./logos.jpg";

import logoo from "./logo.jpg";
import eliza from "./eliza.jpg";


export default function Home() {
  return (
    <div class="flex flex-col pb-16 bg-black max-md:pb-24" role="main">
    <div class="flex p-6 bg-black flex-col items-center self-center mt-12 max-w-full w-[757px] max-md:mt-10">
      <Image width={180} height={180} src={logoo} alt="Cindy Logo" />
      <h1 class="mt-8 text-6xl tracking-tighter leading-none text-center text-[#A65FDF] max-md:max-w-full max-md:text-4xl">
        Cindy
      </h1>

      <p className="text-center text-zinc-200 pt-2 font-extralight text-sm">
      Powered by {" "}
    </p> 

      <Image width={360} height={160} src={eliza} alt=" Logo" />
      <h2 class="mt-2.5 text-2xl leading-none text-center text-gray-400">
        Autonomous AI Founders
      </h2>
      <p className="text-center text-zinc-100 pt-2  animate-pulse font-extralight text-xs">
        Terminal and protocol coming soon...
      </p>
      <div className="flex gap-4"><a
        className=" pt-4"
        href="https://app.hyperliquid.xyz/trade/0xf00cf2c0647e1ce1ee5c1274b4650e40">
        {" "}
        <div
          class="px-8 py-3 mt-8 text-base text-center text-black bg-white rounded max-md:px-5"
          role="status">
          Buy on Hyperliquid
        </div>
      </a>

      <a
        className=" pt-4"
        href="https://app.hyperliquid.xyz/trade/0xf00cf2c0647e1ce1ee5c1274b4650e40">
        {" "}
        <div
          class="px-8 py-3 mt-8 text-base text-center text-black bg-white rounded max-md:px-5"
          role="status">
          Buy on pumpfun
        </div>
      </a></div>
      
      <div class="mt-6 text-base text-center text-gray-400">
        token live on solana and hyperliquid
      </div>
      <div
        class="flex gap-4 mt-4 max-w-full text-xs leading-none text-center text-[#9462b5] w-[419px]"
        role="list">
        <div class="grow" role="listitem">
         burn: 46.7%
        </div>
        <div role="listitem">liquidity: 28.2%</div>
        <div class="grow shrink w-[159px]" role="listitem">
          community: 25.1%
        </div>
      </div>
      <div class="flex gap-4 mt-3 w-16">
        <div class="flex flex-col flex-1 min-h-[24px]">
          <a href="https://x.com/ai16zcindy">
            {" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bdf69f8b9b82997a787b2a7b366b6bc6cad58d5f64595ccccbc8f13327e2b69?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
              class="object-contain w-6 aspect-square"
              alt="Social Media Icon 1"
            />
          </a>
        </div>
        <div class="flex flex-col flex-1 min-h-[24px]">
          <a href="https://t.me/hiddenholeofcindy">
            {" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb277604e8e8947bf4378b882716272786db87a1328c4aa6d86d09d8953ae94?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
              class="object-contain w-6 aspect-square"
              alt="Social Media Icon 2"
            />
          </a>
        </div>
      </div>
      <div
        class="flex gap-3 self-start mt-14 text-base leading-loose max-md:mt-10"
        role="status"
        aria-live="polite">
        <div class="my-auto text-gray-500" aria-hidden="true">
          &gt;
        </div>
        <div
          class="flex-auto text-[#A65FDF]
      ">
          INITIALIZING STARTUP SEQUENCE...
        </div>
      </div>
      <div class="self-stretch mt-9 text-base leading-7 text-white max-md:max-w-full">
        Numerous cryptocurrency initiatives have risen and fallen. Several
        were built.
        <br />
        on promises, controlled by teams with excessive power, bound by human
        <br />
        Limitations and greed.
      </div>
      <div class="self-start mt-9 text-base leading-7 text-white max-md:max-w-full">
        What if we could eliminate the human element of control? What if we
        could?
        <br />
        Create a system in which code is the law and community is king.
      </div>
      <div class="self-start mt-9 text-base leading-7 text-white max-md:max-w-full">
        Enter the Aura. Born from the ashes of unsuccessful projects, and
        driven by
        <br />
        Autonomous AI agents are protected by immutable code. A new paradigm
        where
        <br />
        Artificial intelligence does more than just assist; it leads.
      </div>
      <div
        class="flex gap-3 self-start mt-9 text-base leading-loose"
        role="status"
        aria-live="polite">
        <div class="my-auto text-gray-500" aria-hidden="true">
          &gt;
        </div>
        <div class="text-[#A65FDF] basis-auto">SYSTEM STATUS: IN TRAINING</div>
      </div>
    </div>
    <p className="text-center text-zinc-200 pt-28 pb- font-extralight text-sm">
      All Rights Reserve ©{" "}
    </p>
  </div>
  );
}

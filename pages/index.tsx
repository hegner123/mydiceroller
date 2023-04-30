import Image from "next/image";
import { Inter } from "next/font/google";
import Roller from "mydiceroller/components/roller";
import Selector from "mydiceroller/components/selector";
import Modifier from "mydiceroller/components/modifier";
import Operation from "mydiceroller/components/operation";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <main className="p-10 grid grid-cols-12">
        <div className="col-span-full">
          <h1 className="text-6xl">My Dice Roller</h1>
          <p>MLH is a collection of tools for tabletop roleplaying games.</p>
          <p>It is currently under development.</p>
        </div>
        <div className="col-span-full mt-5">
          <h2 className="text-2xl">Roller</h2>
          <p>The roller is a simple dice roller.</p>
        </div>
        <section className="mt-5 grid grid-cols-12 col-span-full gap-2">
          <Selector id={"d100"} label={"d100"} col={"1"} />
          <Selector id={"d20"} label={"d20"} col={"2"} />
          <Selector id={"d12"} label={"d12"} col={"3"} />
          <Selector id={"d10"} label={"d10"} col={"4"} />
          <Selector id={"d8"} label={"d8"} col={"5"} />
          <Selector id={"d6"} label={"d6"} col={"6"} />
          <Selector id={"d4"} label={"d4"} col={"7"} />
          <Operation id={"operation"} label={"Operation"} col={"8"} />
          <Modifier id={"modifier"} label={"Modifier"} col={"9"} />
          <Roller col={"9"} />
        </section>
      </main>
    </>
  );
}

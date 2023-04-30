import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { atom, useAtom } from "jotai";
import {
  withAdvantage,
  withDisadvantage,
  rollResult,
} from "mydiceroller/store/atoms";
import Roller from "mydiceroller/components/roller";
import Selector from "mydiceroller/components/selector";
import Modifier from "mydiceroller/components/modifier";
import Operation from "mydiceroller/components/operation";
import RollOptions from "mydiceroller/components/rollOptions";
import Info from "mydiceroller/components/info";
const inter = Inter({ subsets: ["latin"] });

withAdvantage.debugLabel = "withAdvantage";
withDisadvantage.debugLabel = "withDisadvantage";

export default function Home() {
  const [hasAdvantage, setHasAdvantage] = useAtom(withAdvantage);
  const [hasDisadvantage, setHasDisadvantage] = useAtom(withDisadvantage);
  const [result] = useAtom(rollResult);
  const [activeTool, setActiveTool] = useState("");

  return (
    <>
      <main className="p-10 grid grid-cols-12 min-h-screen auto-rows-min">
        <div className="col-span-full mb-5">
          <h1 className="text-6xl">My Dice Roller</h1>
          <p>
            My Dice Roller is a collection of tools for tabletop roleplaying
            games.
          </p>
          <p>It is currently under development.</p>
        </div>
        <Info />
        {activeTool === "roller" && (
          <>
            <div className="col-span-full mt-5">
              <h2 className="text-2xl">Roller</h2>
              <p>The roller is a simple dice roller.</p>
            </div>
            <section className="mt-5 grid grid-cols-12 col-span-full gap-2">
              <h4 className="col-span-full">Roll: {result}</h4>
              <Selector id={"d100"} label={"d100"} col={"1"} />
              <Selector id={"d20"} label={"d20"} col={"2"} />
              <Selector id={"d12"} label={"d12"} col={"3"} />
              <Selector id={"d10"} label={"d10"} col={"4"} />
              <Selector id={"d8"} label={"d8"} col={"5"} />
              <Selector id={"d6"} label={"d6"} col={"6"} />
              <Selector id={"d4"} label={"d4"} col={"7"} />
              <Operation id={"operation"} label={"Operation"} col={"8"} />
              <Modifier id={"modifier"} label={"Modifier"} col={"9"} />
              <RollOptions id={"options"} label={"Options"} col={"11"} />
              <Roller col={"11"} />
            </section>
          </>
        )}
      </main>
    </>
  );
}

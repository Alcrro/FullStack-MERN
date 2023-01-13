import React from "react";
import ReducerTutorial from "../../ReactDoc/ReactHooks/ReducerTutorial";
import EffectTutorial from "../../ReactDoc/ReactHooks/EffectTutorial";
import RefTutorial from "../../ReactDoc/ReactHooks/RefTutorial";
import LayoutEffectTutorial from "../../ReactDoc/ReactHooks/LayoutEffectTutorial";
import ImperativeHandle from "../../ReactDoc/ReactHooks/ImperativeHandle";
import ContextTutorial from "../../ReactDoc/ReactHooks/ContextTutorial";
import StateTutorial from "../../ReactDoc/ReactHooks/StateTutorial";
import MemoTutorial from "../../ReactDoc/ReactHooks/MemoTutorial";
import { ArrowFunctions } from "../../ReactDoc/JSforReact/ArrowFunctions";
import MapFilter from "../../ReactDoc/JSforReact/MapFilter";
import TernaryOperators from "../../ReactDoc/JSforReact/TernaryOperators";

const ReactDocument = () => {
  return (
    <div>
      <h1>StateTutorial</h1>
      <StateTutorial />
      <hr />
      <h1>ReducerTutorial</h1>
      <ReducerTutorial />
      <hr />
      <h1>EffectTutorial</h1>
      <EffectTutorial />
      <hr />
      <h1>RefTutorial</h1>
      <RefTutorial />
      <hr />
      <h1>LayoutEffectTutorial</h1>
      <LayoutEffectTutorial />
      <hr />
      <h1>ImperativeHandleTutorial</h1>
      <ImperativeHandle />
      <hr />
      <h1>ContextTutorial</h1>
      <ContextTutorial />
      <hr />
      <h1>MemoTutorial</h1>
      <MemoTutorial />
      <hr />
      <h1>JavaScript for React</h1>
      <h2>ArrowFunctions</h2>
      <ArrowFunctions />
      <hr />
      <h2>MapFilter</h2>
      <MapFilter />
      <hr />
      <h2>TernaryOperators</h2>
      <TernaryOperators />
    </div>
  );
};

export default ReactDocument;

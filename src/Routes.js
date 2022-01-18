import React from "react";
import Resources from "./pages/Resources";
import Example5 from "./pages/Example5";
import Example4 from "./pages/Example4";
import Example3 from "./pages/Example3";
import Example2 from "./pages/Example2";
import Example1 from "./pages/Example1";
import Examples from "./pages/Examples";
import AlignmentControls from "./pages/AlignmentControls";
import IndividualPadding from "./pages/IndividualPadding";
import MoreLayoutOptions from "./pages/MoreLayoutOptions";
import WhatsNew from "./pages/WhatsNew";
import Puttingitalltogether from "./pages/Puttingitalltogether";
import Inspect from "./pages/Inspect";
import Alignment from "./pages/Alignment";
import Distribution from "./pages/Distribution";
import Tables from "./pages/Tables";
import ResponsiveContent from "./pages/ResponsiveContent";
import NestedAutoLayout from "./pages/NestedAutoLayout";
import Resizing2 from "./pages/Resizing2";
import Resizing1 from "./pages/Resizing1";
import Resizing from "./pages/Resizing";
import Individualpadding from "./pages/Individualpadding";
import AdjustingPadding from "./pages/AdjustingPadding";
import Automagical from "./pages/Automagical";
import AutoLayoutFrames from "./pages/AutoLayoutFrames";
import WhatisAutoLayout from "./pages/WhatisAutoLayout";
import HowtouseAutoLayout from "./pages/HowtouseAutoLayout";
import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/howtouseautolayout" element={<HowtouseAutoLayout />} />
        <Route path="/whatisautolayout" element={<WhatisAutoLayout />} />
        <Route path="/autolayoutframes" element={<AutoLayoutFrames />} />
        <Route path="/automagical" element={<Automagical />} />
        <Route path="/adjustingpadding" element={<AdjustingPadding />} />
        <Route path="/individualpadding" element={<Individualpadding />} />
        <Route path="/resizing" element={<Resizing />} />
        <Route path="/resizing1" element={<Resizing1 />} />
        <Route path="/resizing2" element={<Resizing2 />} />
        <Route path="/nestedautolayout" element={<NestedAutoLayout />} />
        <Route path="/responsivecontent" element={<ResponsiveContent />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/distribution" element={<Distribution />} />
        <Route path="/alignment" element={<Alignment />} />
        <Route path="/inspect" element={<Inspect />} />
        <Route
          path="/puttingitalltogether"
          element={<Puttingitalltogether />}
        />
        <Route path="/whatsnew" element={<WhatsNew />} />
        <Route path="/morelayoutoptions" element={<MoreLayoutOptions />} />
        <Route path="/individualpadding" element={<IndividualPadding />} />
        <Route path="/alignmentcontrols" element={<AlignmentControls />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/example1" element={<Example1 />} />
        <Route path="/example2" element={<Example2 />} />
        <Route path="/example3" element={<Example3 />} />
        <Route path="/example4" element={<Example4 />} />
        <Route path="/example5" element={<Example5 />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;

import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";

import  Characters  from "./pages/Characters";
import  Comics  from "./pages/Comics";
import  Movies  from "./pages/Movies";

export function App ()  {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Characters />} />
         <Route path="/filmes" element={<Movies />} />
        <Route path="/hqs" element={<Comics />} />
      </Routes>
    </>
  );
};

import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <MainHeader onCreatePost={() => setShowModal(true)} />
      <PostList showModal={showModal} closeModal={() => setShowModal(false)} />
    </main>
  );
}

export default App

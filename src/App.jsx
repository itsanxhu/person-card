import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card
        img="https://plus.unsplash.com/premium_photo-1714195646981-221ce73e0d5f?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        profileImg="https://plus.unsplash.com/premium_photo-1714195646981-221ce73e0d5f?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        username="sinne99"
        active={true}
      />
    </div>
  );
};

export default App;
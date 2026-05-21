import Card from "./components/Card";
import Grid from "./components/Grid";

const App = () => {
  return (
    <div>
      <Grid />
      <div className="relative z-10 h-screen flex justify-center items-center">
        <div className="flex flex-col gap-10 m-auto lg:flex-row ">
          <Card
            img="https://plus.unsplash.com/premium_photo-1669951582302-d0daa33adf6d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            profileImg="https://plus.unsplash.com/premium_photo-1669951582302-d0daa33adf6d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            username="alrvritti"
            active={false}
            time="12m ago"
          />
          <Card
            img="https://plus.unsplash.com/premium_photo-1714195646981-221ce73e0d5f?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            profileImg="https://plus.unsplash.com/premium_photo-1714195646981-221ce73e0d5f?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            username="izshhaa"
            active={true}
            time="45m ago"
          />
          <Card
            img="https://plus.unsplash.com/premium_photo-1734388422994-acda506c38f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            profileImg="https://plus.unsplash.com/premium_photo-1734388422994-acda506c38f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            username="kinaaxdd"
            active={true}
            time="3hr ago"
          />
        </div>
      </div>
    </div>
  );
};

export default App;

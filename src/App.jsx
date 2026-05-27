import Card from "./components/Card";
import Grid from "./components/Grid";

const App = () => {
  const profileCard = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1669951582302-d0daa33adf6d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileImg:
        "https://plus.unsplash.com/premium_photo-1669951582302-d0daa33adf6d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "alrvritti",
      online: false,
      time: "12m ago",
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1714195646981-221ce73e0d5f?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileImg:
        "https://plus.unsplash.com/premium_photo-1714195646981-221ce73e0d5f?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "izshhaa",
      online: true,
      time: "45m ago",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1734388422994-acda506c38f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileImg:
        "https://plus.unsplash.com/premium_photo-1734388422994-acda506c38f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "kinaaxdd",
      online: true,
      time: "3hr ago",
    },
  ];
  return (
    <div>
      <Grid />
      <div className="relative z-10 h-screen flex justify-center items-center">
        <div className="flex flex-col gap-10 m-auto lg:flex-row ">
          {profileCard.map((prof) => (
            <Card
              key={prof.id}
              img={prof.img}
              profileImg={prof.profileImg}
              username={prof.username}
              online={prof.online}
              time={prof.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

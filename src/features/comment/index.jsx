const Comment = (comment) => {
  const [moments, setMoments] = useState(null);
  const user_id = localStorage.getItem("user_id");
  useEffect(() => {
    getUserFollowingMoments(user_id).then((res) => setMoments(res));
  }, []);

  if (!moments) return null;

  return (
   <div className={styles.feed}>

        {!moments && <p>Нет публикаций</p>}
          {moments.map((moment) => {
            return (
              <Post key={moment.id} moment={moment}/>
            )
          })}
     </div>     
  );
};

export { Feed };

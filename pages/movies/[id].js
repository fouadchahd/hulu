const SingleMovie = ({ id }) => {
  return (
    <div>
      <h1 className="text-3xl flex justify-center">Movie id: {id}</h1>
    </div>
  );
};
export async function getServerSideProps(context) {
  const movieID = context.params.id || 1;
  return {
    props: {
      id: movieID,
    },
  };
}
export default SingleMovie;

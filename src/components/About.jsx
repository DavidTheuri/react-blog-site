function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" width="200" />

      <p>{about}</p>
    </aside>
  );
}

export default About;
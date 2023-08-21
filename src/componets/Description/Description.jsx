// description
const Description = ({name, author,description}) => {
    return (
      <div className="description">
        <h3>{name}</h3>
        <p>By {author}</p>
        <p>{description}</p>


      </div>
    );
  }
  
  export default Description;
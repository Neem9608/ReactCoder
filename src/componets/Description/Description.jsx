// description
const Description = ({name, author,description,price}) => {
    return (
      <div className="description">
        <h3>{name}</h3>
        <p>By {author}</p>
        <p>{description}</p>
        <h3>{price}</h3>


      </div>
    );
  }
  
  export default Description;
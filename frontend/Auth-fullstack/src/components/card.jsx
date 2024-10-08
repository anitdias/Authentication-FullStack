
import PropTypes from 'prop-types';

export default function Card({children}){
  return <div style={{
    border: "1px grey solid",
    padding: "30px",
    boxShadow: "2px 2px 5px 2px #888888",
    borderRadius: "3px",
    margin:'20px',
    width:'300px',
    

  }}>
    {children}
  </div>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

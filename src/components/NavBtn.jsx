import PropTypes from 'prop-types';

NavBtn.propTypes = {
  children: PropTypes.string,
  isSelected: PropTypes.bool,
  onSelected: PropTypes.func,
};


export default function NavBtn({children, isSelected, onSelected}) {
    return(
         <li>
            <button className={isSelected} onClick={onSelected} >{children}</button>
         </li>
    );
}
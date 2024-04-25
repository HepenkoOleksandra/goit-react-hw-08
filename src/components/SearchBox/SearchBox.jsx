import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter); //2
    
    const onAddSearchValue = (e) => {
        const value = e.target.value.trim();
        const action = setFilter(value);
        dispatch(action);
    }
    
    return (
        <div className={css.filter}>
            <span className={css.span}>Find contacts by name</span>
            <input className={css.input}
                type="text"
                value={filter}
                onChange={onAddSearchValue}
            />
        </div>
    );
};

export default SearchBox;

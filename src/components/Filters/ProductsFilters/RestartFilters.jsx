import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../redux/actions';

function RestartFilters () {
    const dispatch = useDispatch();

    const clickHandler = () => {
            dispatch(getAllProducts())
    }

    return (
        <>
            <Button variant="transparent" onClick={() => clickHandler()}><i class="bi bi-arrow-clockwise"></i></Button>
        </>
    )
}

export default RestartFilters;
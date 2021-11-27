import { useSnackbar } from 'react-simple-snackbar';
import { currentData, currentPhilosopher } from "../../utils/staticDataUtils";
import { copyQuoteText } from './utils';

export const Row = ({ data: { searchText, triggerChange, philosopherFullName }, index, style }) => {
    const [openSnackbar] = useSnackbar()

    return (
        currentData[index] !== undefined ? (
            <div key={index} className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
                {`${index + 1}. ${currentData[index]}`}
                <button onClick={() => {
                    copyQuoteText(currentData[index], philosopherFullName)
                    if (searchText === "")
                        localStorage.setItem(currentPhilosopher + "-scrollPosition", index)
                    openSnackbar('Copied!', 1000);
                }}>
                    Copy!{process.env.NODE_ENV !== "production" ? <>!</> : null}
                </button>
            </div >
        ) : null
    )
};
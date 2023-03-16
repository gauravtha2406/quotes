import { Link } from 'react-router-dom'
import ROUTES from '../../routes/routes'
import { rowClickHandler } from '../row/utils'
import { useTranslation } from './custom-hooks/custom-hooks'

export const Translate = ({ inputText, from = 'en', to = 'hi', openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n, darkMode }) => {
    const translationOutput = useTranslation({ inputText, from, to })
    const philosopherFullnameIn_SelectedLanguage = philosopherFullName_i10n[to]

    return translationOutput !== '' && translationOutput !== undefined && translationOutput ? (
        <>
            <span key={index} onClick={rowClickHandler.bind(this, { openSnackbar, searchText, start, end, quote: translationOutput, philosopherFullName: philosopherFullnameIn_SelectedLanguage, index })}>
                {translationOutput} ― {philosopherFullName_i10n}
            </span>

            <button>
                <Link to={ROUTES.image.route} state={{ quotationText: translationOutput, philosopherFullName: philosopherFullnameIn_SelectedLanguage, signature: '@jaaginsaan' }} style={{ textDecoration: 'none', color: darkMode ? '#fff' : '#000' }}>
                    Download Hindi Image
                </Link>
            </button>
        </>
    ) : null
}

import { React } from 'react';

import { collection, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

function ExpensesList() {
    async function printData() {
        const query = await getDocs(collection(db, "users"));
        query.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    }
    return (
        <button onClick={printData} >Button </button>
    )
}

export default ExpensesList;

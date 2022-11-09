import { useState } from "react"
import { db, auth } from '../firebase'
import { addDoc, collection, deleteDoc, getDocs, query, where, doc, updateDoc } from "firebase/firestore/lite"
import { useRouteLoaderData } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/UserProvider"


export const useFirestore = () => {
    const { userData } = useContext(UserContext)

    const [error, setError] = useState()
    const [loading, setLoading] = useState({})
    const [asistencia, setAsistencia] = useState([])

    var today = new Date();
    var now = today.toLocaleString();

    const getAllAsistencia = async () => {
        try {
            setLoading(prev => ({ ...prev, getAllAsistencia: true }))
            const querySnapshot = await getDocs(collection(db, "asistencia"))
            const dataDB = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setAsistencia(dataDB)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(prev => ({ ...prev, getAllAsistencia: false }))
        }
    }

    const addAsistecia = async (tipodepedido, descripcion) => {
        try {
            setLoading(prev => ({ ...prev, addAsistecia: true }))
            const collectionRef = collection(db, "asistencia")
            const payload = {
                tipodepedido: tipodepedido,
                descripcion: descripcion,
                nombre: userData.displayName,
                fecha: now
            }
            const docRef = await addDoc(collectionRef, payload)
            const id = docRef.id
            const newPayload = ({ ...payload, id })
            setAsistencia([newPayload, ...asistencia])

        } catch (error) {
            console.log(error)
            setError(error.message)
        } finally {
            setLoading(prev => ({ ...prev, addAsistecia: false }))
        }
    }







    return {
        error,
        loading,
        addAsistecia,
        getAllAsistencia,
        asistencia
    }
}
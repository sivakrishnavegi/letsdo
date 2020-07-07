export const createProject = (project) => {
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project ,
            authFirstName:'vsk',
            authLastName:'ninja',
            authorId: 11511,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type :'CREATE_PROJECT', project });
        }).catch((err)=>{
            dispatch({type :'CRETE_PROJECT_ERROR',err});
        })

    };
};

import ApolloClient from 'apollo-client-preset';
import gql from 'graphql-tag';

const client = new ApolloClient();

export function loadCurrentSession(email) {
    console.log("loadCurrentSession");
    return (dispatch) => {
        dispatch({
            type: 'LOAD_CURRENT_SESSION_REQUEST'
        });

        return client.query({
            query: gql`
              query myuser($email: String!){
                  user(email: $email) {
                    id
                  }
              }
            `, variables: {
                email: email,
            },
        })
            .then(
            (response) => {
                console.log(response);
            }
            )
            .catch(e => { console.log(e); dispatch(loadCurrentSessionFailure()) })


    };
}

export function loadCurrentSessionSuccess(currentSession) {
    return {
        type: 'LOAD_CURRENT_SESSION_SUCCESS',
        currentSession
    }

}


export function loadCurrentSessionFailure() {
    return {
        type: 'LOAD_CURRENT_SESSION_FAILURE'
    }

}
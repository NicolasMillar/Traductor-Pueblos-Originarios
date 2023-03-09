import './index.scss';
import { Form, TextArea, Button } from 'semantic-ui-react';
import { getIdiomas, getTraducion } from '../../firebase/firebase';
import { useEffect, useState } from 'react';

const Home = () =>{
    
    const [listIdiomas, setList] = useState([]);
    const [textEntrante, setTextEntrante] = useState();
    const [tra, setTra] = useState([]);

    useEffect( () => {

        async function featchMyApi(){
            const idiomas = await getIdiomas();
            setList(idiomas); 
        }

        if(listIdiomas === undefined){
            featchMyApi();
        }
        
    },)



    const Traducir = () => {
        console.log(textEntrante);

        async function featch(){
            const traducciones = await getTraducion();
            setTra(traducciones);
        }

        if(tra === undefined){
            featch();
        }
    }

    return(
        <>
            <div className="container home-page">
                <div className='text-zone'>
                    <h1>Traductor de pueblos originarios</h1>
                    <p> Este proyecto tiene como objetivo desarrollar un traductor/diccionario<br />
                        para la gran mayoría de los pueblos originarios de Chile. Debido a que<br />
                        no tengo un dominio completo de estos idiomas, la página web solo es <br />
                        capaz de traducir palabras y no frases completas.
                    </p>   
                </div>
                <div className='traductor-zone'>
                    <Form>
                        <Form.Field control={TextArea} placeholder='Escribe el texto a traducir..' onChange={ (e) => setTextEntrante(e.target.value)} />
                        <select className="select-idioma">
                            <option>Por favor selecciona un idioma..</option>
                            {
                                listIdiomas.map( (idiomas) => {
                                    return(
                                        <option value={idiomas.Idioma}>{idiomas.Idioma}</option>
                                    );
                                })
                            }
                        </select>
                        <Form.Field control={TextArea} placeholder='El resultado de la traducción..' />
                        <Button color="orange" size="large" onClick={Traducir}>Traducir</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Home
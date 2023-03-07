import './index.scss';
import { Form, TextArea, Button } from 'semantic-ui-react';

const Home = () =>{

    return(
        <>
            <div className="container home-page">
                <div className='text-zone'>
                    <h1>Que es traductor pueblos originarios</h1>
                    <p>Este es un proyecto el cual pretende llegar a desarrollar  un   <br />
                        traductor/diccionario para la gran mayoría de pueblos <br />
                        originarios de chile.
                    </p>   
                </div>
                <div className='traductor-zone'>
                    <Form>
                        <Form.Field control={TextArea} placeholder='Escribe el texto a traducir..' />
                        <select className="select-idioma">
                            <option>Por favor selecciona un idioma..</option>
                        </select>
                        <Form.Field control={TextArea} placeholder='El resultado de la traducción..' />
                        <Button color="orange" size="large" >Traducir</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Home
import React from 'react';
import { Form, Input, FauxWrapper, Label, DeleteSpan, } from '../components/styledComponents';
import '../components/layout.css';
import { Link } from 'gatsby'



const Demo = () => {
        return(
            <Link to="page">
            <FauxWrapper>
                <img className="shopper-logo" src={require('../images/recipe.png')} alt='cookie' />
            </FauxWrapper>
            </Link>
        )
    }

    export default Demo;

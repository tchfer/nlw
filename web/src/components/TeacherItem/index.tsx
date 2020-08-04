import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/61588919?s=460&u=a716dd90443eca06b7373fc922554771000f4048&v=4" alt="Flavio Fernando da Silva"/>
                    <div>
                        <strong>Flavio Fernando da Silva</strong>
                            <span>Língua Inglesa
                            </span>
                    </div>
            </header>

                <p>
                    Aluno de ADS na Fatec, entusiasta por tecnologia e educação. Atualmente aprendendo Python e Java para desenvolvimento back-end
                </p>

                    <footer>
                        <p>
                            Hora/Aula
                            <strong>R$ 60,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
        </article>
    )
}

export default TeacherItem;
import React from 'react';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header />

      <div className='component-Home'>

        <div className='home-texts'>
          <h2>History</h2>
          <p>
            In December 2019, a series of cases of hospitalized patients with a new illness characterized by pneumonia and respiratory failure, due to a new coronavirus (SARS-CoV-2), were reported in Hubei province, China. On February 11, 2020, the World Health Organization named this etiological agent as COVID-19 (Coronavirus Disease, 2019). Subsequently, and despite extensive containment measures, the disease has continued to advance to affect the rest of the countries of Asia, the Middle East and Europe. On March 11, COVID-19 was declared a pandemic at a global press conference by Tedros Adhanom Ghebreyesus, Director General of the World Health Organization.
          </p>

          <h2>Symptoms</h2>
          <p>
            The most common symptoms are the following:
          </p>

          <ul>
            <li>
              Fever
            </li>
            <li>
              Cough
            </li>
            <li>
              Fatigue
            </li>
            <li>
              Loss of taste or smell
            </li>
          </ul>

          <p>The less common symptoms are the following:</p>

          <ul>
            <li>
              Throat pain
            </li>
            <li>
              Skin rash or discoloration of fingers or toes
              Red or irritated eyes
            </li>
            <li>
              Headache
            </li>
            <li>
              aches and pains
            </li>
            <li>
              Diarrhea
            </li>
          </ul>

          <p>Serious symptoms are as follows</p>
          <ul>
            <li>Difficulty breathing or dyspnea</li>
            <li>Loss of mobility or speech or feeling confused</li>
            <li>Chest pain</li>
          </ul>

          <h2>
            What should I do if I feel sick?
          </h2>
          <p>Seek medical attention immediately if you have any of these severe symptoms. You should always call your doctor or health care center before going to the place in question.</p>
          <p>It is recommended that people who suffer from mild symptoms and have a good general state of health confine themselves at home.</p>
          <p>On average, people who are infected start to show symptoms within 5 to 6 days of becoming infected, but it can take up to 14.</p>
        </div>




      </div>


    </div>
  );
};

export default Home;
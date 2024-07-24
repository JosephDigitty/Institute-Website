import React from 'react'
import ArticleThre3e from '../assets/PDFs/ArticleThre3e.pdf'
import { Link } from 'react-router-dom';

const ArticleThree = () => {
  return (
    <div className='md:px-[395px] px-10 pb-6 bg-gray-200 py-3 '>
        <div className='py-8'>
        <h2 className='text-xl md:text-2xl text-slate-500 font-Merriweather  font-semibold'>
        THE DYNAMICS OF LEADERSHIP THROUGH DIPLOMACY IN THE FACE OF ECONOMIC AND ORGANIZATIONAL CHALLENGES
        </h2>
        <div className='flex md:flex-row py-3 flex-col justify-start gap-1 '>
        <p className='text-gray-600 font-light  italics' >
        Oyewole O. Sarumi PhD
        </p>
        <p className='text-gray-600 font-light  italics'>
        (Registrar, CIPDM. Tel. +234 803 304 1421)
        </p>
        </div>
        <p className='font-Merriweather text-black/90 text-[16px] md:text-justify leading-8'>
        In today's worldwide environment, exercising leadership via diplomacy is essential for 
        negotiating the intricacies of organizational and economic difficulties. In this sense, 
        diplomacy refers to the skill of collaboration, negotiation, and conflict resolution that 
        leaders use to successfully confront and reduce issues. 
        <br />
        A complex strategy, leadership via diplomacy uses cooperation, negotiation, and conflict 
        resolution to solve problems and accomplish corporate goals. Leaders with diplomatic skills 
        are adept at settling disputes inside their groups or companies. By encouraging fruitful 
        communication and resolving conflicts between divergent interests, they serve as mediators 
        (Thompson, 2008). 

        <br />
        Diplomatic leadership necessitates engaging with a broad spectrum of stakeholders, 
        both internal and external. Leaders need to establish rapport and take into account 
        the requirements and worries of different stakeholders (Jain & Verma, 2017).
        In times of economic and organizational adversity, effective leadership frequently 
        requires diplomatic abilities to promote collaboration, forge agreement, and ease the 
        settlement of conflicts. To get through these volatile times, leaders need to use both 
        soft and strong power.
        <br />
        </p>
        </div>
        <div className='py-1'>
            <p className='text-xl py-3 md:text-xl text-slate-500 font-Merriweather  font-semibold'>
             <span className='capitalize'> DEFINITIONS OF KEY TERMS</span>
            </p>
            <p className='text-sm md:text-[15px] text-slate-500 font-Merriweather  font-semibold'>
            Diplomacy

            </p>
            <p className='font-Merriweather text-black/90 text-[16px] md:text-justify leading-8'>
            a.	Diplomacy can be defined as a state institution codified in the 1961 Vienna convention 
            on diplomatic relations. The traditional (not limitative) functions of a diplomatic mission 
            consist of: Representation (of identity), Protection (of individuals and state interests),
             Negotiation (arguing about ideals and values; bargaining about resources and capacities) 
             and Information/reporting (including analysis and evaluation as value-added diplomacy). 
            Economic sustainability, defined as the ability to maintain or enhance economic
            <br /> 
            b.	Diplomacy can be defined as foreign policy instrument (a method of interaction) to 
            peacefully carry out international relations among actors consisting of: A process of 
            conducting international relationships, a set of mechanisms, techniques, procedures 
            through which these processes are  enacted, embracing a certain mindset of thinking and 
            acting (Kuus, 2016); and the aim of traditional Diplomacy among states is the art of 
            convincing without using force on the basis of ethically principled, enlightened 
            pragmatism (Davis Cross, 2016).
            <br />
            Tc.	Diplomacy can also be defined as a mode of personal behaviour (etiquette); a certain 
            way of doing business (tact, finesse, discretion) and a way of life by which relationships 
            are consummated and sustained.
            <br />
            </p>
            <p className='text-sm md:text-[15px] text-slate-500 font-Merriweather  font-semibold'>
            Leadership
            </p>
            <p className='font-Merriweather text-black/90 text-[16px] md:text-justify leading-8'>
            The process of persuading and directing people or groups toward the accomplishment of a 
            shared objective is known as leadership (Northouse, 2018).  At its core, leadership is
             about having influence. To inspire and direct people toward the intended result, 
             leaders employ their personal qualities, communication prowess, and capacity for making 
             decisions (Yukl, 2013).
             <br />
            Organizations, society, and people's lives are fundamentally shaped by the multifaceted 
            and dynamic idea of leadership. When it comes to making decisions that affect the group 
            or organization, leaders frequently have a major influence. They have to evaluate the 
            facts at hand, weigh the ramifications, and make wise decisions.
            </p>
        </div>
        <div className='py-5  '>
        <Link className='hover:text-black  font-ptserif text-purple-600 ' href={ArticleThre3e} download="Diplomatic_Practices_for_Organisational_and_National_Economic_Sustainability_DS_-"> Downlaod Full Article</Link>

        </div>
    </div>
  )
}

export default ArticleThree
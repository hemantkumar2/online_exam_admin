import React, { createContext } from "react";
import PropTypes from "prop-types";

import { useInputState } from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";

export const QuestionContext = createContext();

const QuestionProvider = (props) => {
  const [question, setQuestion, resetQuestion] = useInputState("");
  const [optOne, setOptOne, resetOptOne] = useInputState("");
  const [optTwo, setOptTwo, resetOptTwo] = useInputState("");
  const [optThree, setOptThree, resetOptThree] = useInputState("");
  const [optFour, setOptFour, resetOptFour] = useInputState("");
  const [marks, setMarks, resetMarks] = useInputState("");
  const [correctOpt, setCorrectOpt, resetCorrectOpt] = useInputState("");
  const [optObj, setOptObj, resetOptObj] = useInputState({});
  const [questions, setQuestions, resetQuestions] = useInputState([]);
  const [isEdit, setIsEdit] = useToggleState(false);
  return (
    <QuestionContext.Provider
      value={{
        question,
        setQuestion,
        resetQuestion,
        optOne,
        setOptOne,
        resetOptOne,
        optTwo,
        setOptTwo,
        resetOptTwo,
        optThree,
        setOptThree,
        resetOptThree,
        optFour,
        setOptFour,
        resetOptFour,
        marks,
        setMarks,
        resetMarks,
        correctOpt,
        setCorrectOpt,
        resetCorrectOpt,
        optObj,
        setOptObj,
        resetOptObj,
        questions,
        setQuestions,
        resetQuestions,
        isEdit,
        setIsEdit,
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
QuestionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default QuestionProvider;

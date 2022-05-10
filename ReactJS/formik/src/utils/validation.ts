const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateRequired = (value: any) => !!value;

export const validateEmail = (value: string) => emailRegex.test(value);

export const validationRules = {
  required: [
    {
      validator: validateRequired,
      message: 'This field is required',
    },
  ],
  email: [
    {
      validator: validateRequired,
      message: 'This field is required',
    },
    {
      validator: validateEmail,
      message: 'Email must be a valid email address',
    },
  ],
};

interface ErrorType {
  [key: string]: string;
}

export const validateValuesByRule = (rules: any) => (values: any) => {
  const errors: ErrorType = {};

  for (const ruleList of Object.entries(rules)) {
    const key: string = [...ruleList].shift() as string;
    const rule: Array<any> = [...ruleList].pop() as Array<any>;

    for (let i = 0; i < rule.length; i++) {
      if (!rule[i].validator(values[key])) {
        errors[key] = rule[i].message;
        break;
      }
    }
  }

  return errors;
};

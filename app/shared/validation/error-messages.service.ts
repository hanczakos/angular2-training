export class ErrorMessagesService {

    static getErrorMessage(code: string) {
        let config = {
            'required': 'This field is required.',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'invalidFullName': 'This name is not a real name.'
        };
        return config[code];
    }

}


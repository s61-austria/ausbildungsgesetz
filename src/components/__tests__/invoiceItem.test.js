import React, {Component} from 'react';
import {shallow, mount} from 'enzyme';
import {InvoiceItem} from '../invoices/InvoiceItem';
import {
    Card,
    CardHeader,
    CardText,
    DatePicker,
    Divider,
    MenuItem,
    RaisedButton,
    SelectField,
    TextField
} from 'material-ui';
import {MuiThemeProvider} from 'material-ui';

const invoice = {
    uuid: "gdbnfmdsfbhds ndsflhdsfsf",
    state: "OPEN",
    generationType: "AUTO",
    createdOn: 1528981016,
    createdFor: 1528981016,
    expires: 1528981016,
    totalPrice: 200,
    meters: 5000,
    payLink: "",
    payTime: 1528981016,
    paymentId: "bhjfsgfdsjdsfkdsfndsbhfndsfmsd",
    profile: {
        kontoUser: {
            userName: "Jandie Hendriks",
        }
    },
    vehicle: {
        licensePlate: "AB-12-AG",
    },
};

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <MuiThemeProvider>
            <InvoiceItem invoice={invoice}
                         payInvoice={() => { }}
                         changeInvoiceState={() => { }}
                         regenerateInvoice={() => { }}/>
        </MuiThemeProvider>
    );

    wrapped.update();
});

afterEach(() => {
    wrapped.unmount();
});

it('renders the Card component', () => {
    expect(wrapped.find(Card).length).toEqual(1);
});

it('checks if the card component rendered 2 children and is not expanded', () => {
    const todoInputProps = wrapped.find(Card).props();
    expect(todoInputProps.expandable).toEqual(false);
    expect(todoInputProps.children.length).toEqual(2);
});

it('checks if header contains invoice uuid and state', () => {
    expect(wrapped.find(Card).at(0).text()).toContain(invoice.uuid);
    expect(wrapped.find(Card).at(0).text()).toContain(invoice.state);
});

it('checks if textfields are rendered', () => {
    wrapped.find(InvoiceItem).find(Card).find(CardHeader).simulate('click');
    wrapped.update();

    expect(wrapped.html()).toContain('Jandie Hendriks');
});
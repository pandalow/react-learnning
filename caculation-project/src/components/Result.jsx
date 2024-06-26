import { useEffect, useState } from 'react';
import '../index.css';
import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({ output }) {
    const data = calculateInvestmentResults(output)
    const initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

    return (
            <table id='result'>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        const totalInterest =
                            item.valueEndOfYear -
                            item.annualInvestment * item.year -
                            initialInvestment;
                        const totalAmountInvested =
                            item.valueEndOfYear -
                            totalInterest
                        return (
                            <tr key={item.year}>
                                <td>{item.year}</td>
                                <td>{formatter.format(item.valueEndOfYear)}</td>
                                <td>{formatter.format(item.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
    );
}

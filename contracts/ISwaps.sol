pragma solidity ^0.5.7;

interface ISwaps {
    function createOrder(
        address _baseAddress,
        address _quoteAddress,
        uint _baseLimit,
        uint _quoteLimit,
        uint _expirationTimestamp,
        address _baseOnlyInvestor,
        uint _minBaseInvestment,
        uint _minQuoteInvestment
    ) external;

    function deposit(
        bytes32 _id,
        address _token,
        uint _amount
    ) payable external;

    function cancel(bytes32 _id) external;

    function refund(bytes32 _id, address _token) external;
}

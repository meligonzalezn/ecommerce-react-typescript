function Payment (): JSX.Element {
        return (
          <div className="w-2/4">
            <div className="flex items-center justify-between rounded-xl bg-layer-0 p-4 border border-gray-200">
              <div className="flex space-x-4">
                <div className="rounded-xl bg-layer-3 px-6 py-3 bg-gray-100">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <path d="M9.4968 12.8124H11.4876C15.8124 12.8124 18.2664 10.8648 19.0476 6.8604C19.0728 6.7284 19.0956 6.6012 19.1148 6.474C19.158 6.2028 19.1796 5.9592 19.1892 5.7252C19.1964 5.5644 19.2012 5.4696 19.2 5.3808C19.1988 4.95195 19.1106 4.5278 18.9408 4.134C18.786 3.7788 18.552 3.4296 18.2052 3.0324C17.1816 1.8684 15.3984 1.2 13.2684 1.2H6.4848C6.25363 1.20028 6.03012 1.28294 5.8544 1.43315C5.67868 1.58336 5.56225 1.79128 5.526 2.0196L4.302 9.9048L2.7792 19.7268C2.76621 19.81 2.77138 19.895 2.79435 19.9759C2.81733 20.0569 2.85756 20.132 2.91228 20.1959C2.96701 20.2599 3.03494 20.3113 3.11139 20.3465C3.18785 20.3817 3.27102 20.4 3.3552 20.4H6.6816L7.7004 14.3484C7.76646 13.9198 7.98407 13.529 8.31369 13.2472C8.64332 12.9653 9.06311 12.8111 9.4968 12.8124ZM20.4204 7.308C19.47 11.8332 16.392 14.2344 11.4864 14.2344H9.4968C9.40151 14.2342 9.30933 14.2683 9.23708 14.3304C9.16482 14.3925 9.11731 14.4786 9.1032 14.5728L7.7772 22.8H11.2656C11.4679 22.8002 11.6635 22.7281 11.8173 22.5967C11.9711 22.4654 12.0729 22.2834 12.1044 22.0836L12.1392 21.9036L12.8052 17.6868L12.8484 17.454C12.8799 17.2542 12.9817 17.0722 13.1355 16.9409C13.2893 16.8095 13.4849 16.7374 13.6872 16.7376H14.2152C17.6352 16.7376 20.3124 15.348 21.0948 11.3304C21.4164 9.6744 21.2532 8.2896 20.4204 7.308Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-heading">
                    PayPal
                  </h3>
                  <div className="text-sm">Connected</div>
                </div>
              </div>
            </div>
            
          </div>
        );
}

export default Payment;
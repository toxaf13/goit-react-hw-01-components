export const App = ({children}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {children}
    </div>
  );
};

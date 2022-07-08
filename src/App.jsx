import useForm from './Hooks/useForm';

function App() {
  const [form, handleChange] = useForm({name:''})

  console.log(form)
  return (
  <form>
      <input
        name='name'
        placeholder='Nombre'
        value={form.name}
        onChange={handleChange}
      />
  </form>
 );
}

export default App;

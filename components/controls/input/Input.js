import classes from './Input.scss'

const Input = (field) => {
  return(
    <div className={classnames('form-group', { 'has-error has-danger': field.meta.error && field.meta.touched })}>
      {field.label && <label>{field.label}</label>}
      <input {...field.input} className="form-control" type={field.type} placeholder={field.placeholder} />
      {field.meta.touched && field.meta.error && <span className={classes.error}>{field.meta.error}</span>}
    </div>
  )
};

export default Input
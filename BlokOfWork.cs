using PLAYSCRIBE_Backend.Models;


public interface IBlokOfWork
{

}
internal class BlokOfWork : IBlokOfWork
{
    private  DataBlokClass Context { get; set; }
    public BlokOfWork(DataBlokClass _Context)
    {
        Context = _Context;
    }


}
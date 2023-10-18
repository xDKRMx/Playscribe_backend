using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using PLAYSCRIBE_Backend.Data;
using PLAYSCRIBE_Backend.Models;
using System.Linq;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;

namespace PLAYSCRIBE_Backend.Controllers
{
    public class GameController : Controller
    {

        public DataConnectionClass DataConnect { get; set; }
        public GameController(DataConnectionClass _DataConnect)
        {
			DataConnect = _DataConnect;

		}
        public IActionResult GameMain()
        {
			//List<ScoreTable> DataList = DataCommand();
			//ViewBag.liste = DataList;
			var topScores = DataConnect.BestScores.OrderByDescending(score => score.BestScore).Take(100).ToList();
			ViewBag.liste = topScores;
			return View();
        }
        public IActionResult AirborneRivals()
        {
            return View();
        }

        private List<ScoreTable> DataCommand()
		{
            string connectionString = "Server=DESKTOP-1FVU3HK;Database=Scores;Trusted_Connection=true;";
            SqlConnection Connection = new SqlConnection(connectionString);
			
			string query = "select top 100 * from dbo.BestScores order by BestScore desc";
            SqlCommand Command = new SqlCommand(query, Connection);
			
			List<ScoreTable> DataConnection = new List<ScoreTable>();

            try
            {
				Connection.Open();
				SqlDataReader ReadData = Command.ExecuteReader();

				while (ReadData.Read())
				{
					ScoreTable Score = new ScoreTable
					{
						Username = ReadData.GetString(ReadData.GetOrdinal("username")),
						BestScore = ReadData.GetInt32(ReadData.GetOrdinal("BestScore")),
						MaxDron1Kill = ReadData.GetInt32(ReadData.GetOrdinal("MaxDron1Kill")),
						MaxDron2Kill = ReadData.GetInt32(ReadData.GetOrdinal("MaxDron2Kill")),
						MaxDron3Kill = ReadData.GetInt32(ReadData.GetOrdinal("MaxDron3Kill")),
						MaxDron4Kill = ReadData.GetInt32(ReadData.GetOrdinal("MaxDron4Kill"))
					};
					DataConnection.Add(Score);

				}
				
			}
			catch(Exception ex)
			{
				ViewBag.ErrorMessage = "Bir hata oluştu: " + ex.Message;
			}
			finally
			{
				Connection.Close();
			}
			
			return DataConnection;

		}
	}
}
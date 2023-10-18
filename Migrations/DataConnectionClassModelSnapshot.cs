﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PLAYSCRIBE_Backend.Models;

#nullable disable

namespace PLAYSCRIBE_Backend.Migrations
{
    [DbContext(typeof(DataConnectionClass))]
    partial class DataConnectionClassModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("PLAYSCRIBE_Backend.Models.DroneProperty", b =>
                {
                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int?>("DroneColor")
                        .HasColumnType("int");

                    b.Property<int?>("LazerColor")
                        .HasColumnType("int");

                    b.HasKey("Username");

                    b.ToTable("DroneProperties");
                });

            modelBuilder.Entity("PLAYSCRIBE_Backend.Models.ScoreTable", b =>
                {
                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("BestScore")
                        .HasColumnType("int");

                    b.Property<int>("MaxDron1Kill")
                        .HasColumnType("int");

                    b.Property<int>("MaxDron2Kill")
                        .HasColumnType("int");

                    b.Property<int>("MaxDron3Kill")
                        .HasColumnType("int");

                    b.Property<int>("MaxDron4Kill")
                        .HasColumnType("int");

                    b.HasKey("Username");

                    b.ToTable("BestScores");
                });
#pragma warning restore 612, 618
        }
    }
}
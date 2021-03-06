﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OperationNameGenerator.BusinessModels
{
    [Table("Noun")]
    public class Noun
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Value { get; set; }
        public DateTime CreationDate {get;set;}
        public DateTime ModificationDate {get;set;}

        public Noun()
        {
            Id = Guid.NewGuid();
            CreationDate = DateTime.Now;
        }
    }
}
